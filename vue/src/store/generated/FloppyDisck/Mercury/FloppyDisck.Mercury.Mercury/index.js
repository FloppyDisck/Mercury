import { txClient, queryClient } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Price } from "./module/types/Mercury/util";
import { Review } from "./module/types/Mercury/util";
import { Listing } from "./module/types/Mercury/listing";
import { Account } from "./module/types/Mercury/account";
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Listing: {},
        ListingAll: {},
        ListingWithSeller: {},
        ListingWithReview: {},
        ListingWithName: {},
        Account: {},
        AccountWallet: {},
        AccountAll: {},
        AccountWithName: {},
        AccountWithReview: {},
        _Structure: {
            Price: getStructure(Price.fromPartial({})),
            Review: getStructure(Review.fromPartial({})),
            Listing: getStructure(Listing.fromPartial({})),
            Account: getStructure(Account.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getListing: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Listing[JSON.stringify(params)] ?? {};
        },
        getListingAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ListingAll[JSON.stringify(params)] ?? {};
        },
        getListingWithSeller: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ListingWithSeller[JSON.stringify(params)] ?? {};
        },
        getListingWithReview: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ListingWithReview[JSON.stringify(params)] ?? {};
        },
        getListingWithName: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ListingWithName[JSON.stringify(params)] ?? {};
        },
        getAccount: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Account[JSON.stringify(params)] ?? {};
        },
        getAccountWallet: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AccountWallet[JSON.stringify(params)] ?? {};
        },
        getAccountAll: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AccountAll[JSON.stringify(params)] ?? {};
        },
        getAccountWithName: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AccountWithName[JSON.stringify(params)] ?? {};
        },
        getAccountWithReview: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.AccountWithReview[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('init');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach((subscription) => {
                dispatch(subscription.action, subscription.payload);
            });
        },
        async QueryListing({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryListing(key.id, query)).data : (await (await initQueryClient(rootGetters)).queryListing(key.id)).data;
                commit('QUERY', { query: 'Listing', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryListing', payload: { options: { all }, params: { ...key }, query } });
                return getters['getListing']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryListing', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryListingAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryListingAll(query)).data : (await (await initQueryClient(rootGetters)).queryListingAll()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryListingAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ListingAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryListingAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getListingAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryListingAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryListingWithSeller({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryListingWithSeller(key.seller, query)).data : (await (await initQueryClient(rootGetters)).queryListingWithSeller(key.seller)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryListingWithSeller(key.seller, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ListingWithSeller', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryListingWithSeller', payload: { options: { all }, params: { ...key }, query } });
                return getters['getListingWithSeller']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryListingWithSeller', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryListingWithReview({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryListingWithReview(key.review, query)).data : (await (await initQueryClient(rootGetters)).queryListingWithReview(key.review)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryListingWithReview(key.review, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ListingWithReview', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryListingWithReview', payload: { options: { all }, params: { ...key }, query } });
                return getters['getListingWithReview']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryListingWithReview', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryListingWithName({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryListingWithName(key.name, query)).data : (await (await initQueryClient(rootGetters)).queryListingWithName(key.name)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryListingWithName(key.name, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'ListingWithName', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryListingWithName', payload: { options: { all }, params: { ...key }, query } });
                return getters['getListingWithName']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryListingWithName', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryAccount({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryAccount(key.id, query)).data : (await (await initQueryClient(rootGetters)).queryAccount(key.id)).data;
                commit('QUERY', { query: 'Account', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAccount', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAccount']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryAccount', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryAccountWallet({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryAccountWallet(key.user, query)).data : (await (await initQueryClient(rootGetters)).queryAccountWallet(key.user)).data;
                commit('QUERY', { query: 'AccountWallet', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAccountWallet', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAccountWallet']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryAccountWallet', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryAccountAll({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryAccountAll(query)).data : (await (await initQueryClient(rootGetters)).queryAccountAll()).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryAccountAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'AccountAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAccountAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAccountAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryAccountAll', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryAccountWithName({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryAccountWithName(key.name, query)).data : (await (await initQueryClient(rootGetters)).queryAccountWithName(key.name)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryAccountWithName(key.name, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'AccountWithName', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAccountWithName', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAccountWithName']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryAccountWithName', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryAccountWithReview({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryAccountWithReview(key.review, query)).data : (await (await initQueryClient(rootGetters)).queryAccountWithReview(key.review)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await (await initQueryClient(rootGetters)).queryAccountWithReview(key.review, { ...query, 'pagination.key': value.pagination.nextKey })).data;
                    for (let prop of Object.keys(next_values)) {
                        if (Array.isArray(next_values[prop])) {
                            value[prop] = [...value[prop], ...next_values[prop]];
                        }
                        else {
                            value[prop] = next_values[prop];
                        }
                    }
                }
                commit('QUERY', { query: 'AccountWithReview', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAccountWithReview', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAccountWithReview']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryAccountWithReview', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async sendMsgDeleteAccount({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteAccount(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteAccount:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgUpdateListing({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateListing(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateListing:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateListing:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgUpdateAccount({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateAccount(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateAccount:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgCreateListing({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateListing(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateListing:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateListing:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgDeleteListing({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteListing(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteListing:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteListing:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async sendMsgCreateAccount({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateAccount(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateAccount:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async MsgDeleteAccount({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteAccount(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteAccount:Create', 'Could not create message.');
                }
            }
        },
        async MsgUpdateListing({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateListing(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateListing:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateListing:Create', 'Could not create message.');
                }
            }
        },
        async MsgUpdateAccount({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgUpdateAccount(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgUpdateAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateAccount:Create', 'Could not create message.');
                }
            }
        },
        async MsgCreateListing({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateListing(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateListing:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateListing:Create', 'Could not create message.');
                }
            }
        },
        async MsgDeleteListing({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgDeleteListing(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgDeleteListing:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteListing:Create', 'Could not create message.');
                }
            }
        },
        async MsgCreateAccount({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgCreateAccount(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgCreateAccount:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateAccount:Create', 'Could not create message.');
                }
            }
        },
    }
};
