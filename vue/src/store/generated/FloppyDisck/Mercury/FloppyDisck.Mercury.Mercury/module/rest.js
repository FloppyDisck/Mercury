/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
            const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
                ...requestParams,
                headers: {
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                    ...(requestParams.headers || {}),
                },
                signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
                body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
            }).then(async (response) => {
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
}
/**
 * @title Mercury/account.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccountAll
         * @request GET:/FloppyDisck/Mercury/Mercury/account
         */
        this.queryAccountAll = (query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/account`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccountWithName
         * @request GET:/FloppyDisck/Mercury/Mercury/account/name/{name}
         */
        this.queryAccountWithName = (name, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/account/name/${name}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccountWithReview
         * @request GET:/FloppyDisck/Mercury/Mercury/account/review/{review}
         */
        this.queryAccountWithReview = (review, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/account/review/${review}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccountWallet
         * @request GET:/FloppyDisck/Mercury/Mercury/account/wallet/{user}
         */
        this.queryAccountWallet = (user, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/account/wallet/${user}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryAccount
         * @request GET:/FloppyDisck/Mercury/Mercury/account/{id}
         */
        this.queryAccount = (id, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/account/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryListingAll
         * @request GET:/FloppyDisck/Mercury/Mercury/listing
         */
        this.queryListingAll = (query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/listing`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryListingWithName
         * @request GET:/FloppyDisck/Mercury/Mercury/listing/name/{name}
         */
        this.queryListingWithName = (name, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/listing/name/${name}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryListingWithReview
         * @request GET:/FloppyDisck/Mercury/Mercury/listing/review/{review}
         */
        this.queryListingWithReview = (review, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/listing/review/${review}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryListingWithSeller
         * @request GET:/FloppyDisck/Mercury/Mercury/listing/seller/{seller}
         */
        this.queryListingWithSeller = (seller, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/listing/seller/${seller}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryListing
         * @request GET:/FloppyDisck/Mercury/Mercury/listing/{id}
         */
        this.queryListing = (id, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/listing/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPurchaseAll
         * @request GET:/FloppyDisck/Mercury/Mercury/purchase
         */
        this.queryPurchaseAll = (query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/purchase`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPurchaseWithBuyer
         * @request GET:/FloppyDisck/Mercury/Mercury/purchase/buyer/{buyer}
         */
        this.queryPurchaseWithBuyer = (buyer, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/purchase/buyer/${buyer}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPurchaseWithListing
         * @request GET:/FloppyDisck/Mercury/Mercury/purchase/listing/{listing}
         */
        this.queryPurchaseWithListing = (listing, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/purchase/listing/${listing}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPurchase
         * @request GET:/FloppyDisck/Mercury/Mercury/purchase/{id}
         */
        this.queryPurchase = (id, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/purchase/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryReviewAll
         * @request GET:/FloppyDisck/Mercury/Mercury/review
         */
        this.queryReviewAll = (query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/review`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryReviewWithReviewed
         * @request GET:/FloppyDisck/Mercury/Mercury/review/from/{type}/{id}
         */
        this.queryReviewWithReviewed = (type, id, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/review/from/${type}/${id}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryReviewWithReviewer
         * @request GET:/FloppyDisck/Mercury/Mercury/review/reviewer/{creator}
         */
        this.queryReviewWithReviewer = (creator, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/review/reviewer/${creator}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryReviewWithScore
         * @request GET:/FloppyDisck/Mercury/Mercury/review/score/{score}
         */
        this.queryReviewWithScore = (score, query, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/review/score/${score}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryReview
         * @summary this line is used by starport scaffolding # 2
         * @request GET:/FloppyDisck/Mercury/Mercury/review/{id}
         */
        this.queryReview = (id, params = {}) => this.request({
            path: `/FloppyDisck/Mercury/Mercury/review/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
