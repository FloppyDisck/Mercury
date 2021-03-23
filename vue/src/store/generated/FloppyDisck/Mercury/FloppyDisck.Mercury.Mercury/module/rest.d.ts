export interface MercuryAccount {
    creator?: string;
    /** @format uint64 */
    id?: string;
    name?: string;
    review?: MercuryReview;
}
export interface MercuryListing {
    creator?: string;
    /** @format uint64 */
    id?: string;
    price?: MercuryPrice;
    name?: string;
    description?: string;
    review?: MercuryReview;
}
export interface MercuryMsgCreateAccountResponse {
    /** @format uint64 */
    id?: string;
}
export interface MercuryMsgCreateListingResponse {
    /** @format uint64 */
    id?: string;
}
export interface MercuryMsgCreatePurchaseResponse {
    /** @format uint64 */
    id?: string;
}
export declare type MercuryMsgDeleteAccountResponse = object;
export declare type MercuryMsgDeleteListingResponse = object;
export declare type MercuryMsgDeletePurchaseResponse = object;
export declare type MercuryMsgUpdateAccountResponse = object;
export declare type MercuryMsgUpdateListingResponse = object;
export declare type MercuryMsgUpdatePurchaseResponse = object;
export interface MercuryPrice {
    /** @format uint64 */
    amount?: string;
    currency?: string;
}
export interface MercuryPurchase {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    listing?: string;
    price?: MercuryPrice;
    description?: string;
}
export interface MercuryQueryAllAccountResponse {
    Account?: MercuryAccount[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MercuryQueryAllListingResponse {
    Listing?: MercuryListing[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MercuryQueryAllPurchaseResponse {
    Purchase?: MercuryPurchase[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MercuryQueryGetAccountResponse {
    Account?: MercuryAccount;
}
export interface MercuryQueryGetListingResponse {
    Listing?: MercuryListing;
}
export interface MercuryQueryGetPurchaseResponse {
    Purchase?: MercuryPurchase;
}
export interface MercuryReview {
    /** @format int64 */
    average?: number;
    /** @format int64 */
    count?: number;
    /** @format int64 */
    sum?: number;
}
export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title Mercury/query.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAccountAll
     * @request GET:/FloppyDisck/Mercury/Mercury/account
     */
    queryAccountAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAccountWithName
     * @request GET:/FloppyDisck/Mercury/Mercury/account/name/{name}
     */
    queryAccountWithName: (name: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAccountWithReview
     * @request GET:/FloppyDisck/Mercury/Mercury/account/review/{review}
     */
    queryAccountWithReview: (review: number, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAccountWallet
     * @request GET:/FloppyDisck/Mercury/Mercury/account/wallet/{user}
     */
    queryAccountWallet: (user: string, params?: RequestParams) => Promise<HttpResponse<MercuryQueryGetAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAccount
     * @request GET:/FloppyDisck/Mercury/Mercury/account/{id}
     */
    queryAccount: (id: string, params?: RequestParams) => Promise<HttpResponse<MercuryQueryGetAccountResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryListingAll
     * @request GET:/FloppyDisck/Mercury/Mercury/listing
     */
    queryListingAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllListingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryListingWithName
     * @request GET:/FloppyDisck/Mercury/Mercury/listing/name/{name}
     */
    queryListingWithName: (name: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllListingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryListingWithReview
     * @request GET:/FloppyDisck/Mercury/Mercury/listing/review/{review}
     */
    queryListingWithReview: (review: number, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllListingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryListingWithSeller
     * @request GET:/FloppyDisck/Mercury/Mercury/listing/seller/{seller}
     */
    queryListingWithSeller: (seller: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllListingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryListing
     * @request GET:/FloppyDisck/Mercury/Mercury/listing/{id}
     */
    queryListing: (id: string, params?: RequestParams) => Promise<HttpResponse<MercuryQueryGetListingResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPurchaseAll
     * @request GET:/FloppyDisck/Mercury/Mercury/purchase
     */
    queryPurchaseAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllPurchaseResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPurchaseWithBuyer
     * @request GET:/FloppyDisck/Mercury/Mercury/purchase/buyer/{buyer}
     */
    queryPurchaseWithBuyer: (buyer: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllPurchaseResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPurchaseWithListing
     * @request GET:/FloppyDisck/Mercury/Mercury/purchase/listing/{listing}
     */
    queryPurchaseWithListing: (listing: string, query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MercuryQueryAllPurchaseResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPurchase
     * @summary this line is used by starport scaffolding # 2
     * @request GET:/FloppyDisck/Mercury/Mercury/purchase/{id}
     */
    queryPurchase: (id: string, params?: RequestParams) => Promise<HttpResponse<MercuryQueryGetPurchaseResponse, RpcStatus>>;
}
export {};
