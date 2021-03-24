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

export interface MercuryAccount {
  creator?: string;

  /** @format uint64 */
  id?: string;
  name?: string;
  review?: MercuryAvgReview;
}

export interface MercuryAvgReview {
  /** @format int64 */
  average?: number;

  /** @format int64 */
  count?: number;

  /** @format int64 */
  sum?: number;
}

export interface MercuryListing {
  creator?: string;

  /** @format uint64 */
  id?: string;
  price?: MercuryPrice;
  name?: string;
  description?: string;
  review?: MercuryAvgReview;
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

export interface MercuryMsgCreateReviewResponse {
  /** @format uint64 */
  id?: string;
}

export type MercuryMsgDeleteAccountResponse = object;

export type MercuryMsgDeleteListingResponse = object;

export type MercuryMsgDeletePurchaseResponse = object;

export type MercuryMsgDeleteReviewResponse = object;

export type MercuryMsgUpdateAccountResponse = object;

export type MercuryMsgUpdateListingResponse = object;

export type MercuryMsgUpdatePurchaseResponse = object;

export type MercuryMsgUpdateReviewResponse = object;

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

export interface MercuryQueryAllReviewResponse {
  Review?: MercuryReview[];

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

export interface MercuryQueryGetReviewResponse {
  Review?: MercuryReview;
}

export interface MercuryReview {
  creator?: string;

  /** @format uint64 */
  id?: string;
  reviewed?: MercuryReviewed;

  /** @format int64 */
  score?: number;
  description?: string;
}

export interface MercuryReviewed {
  type?: string;

  /** @format uint64 */
  id?: string;
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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
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

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
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

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
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
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
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

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Mercury/query.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAccountAll
   * @request GET:/FloppyDisck/Mercury/Mercury/account
   */
  queryAccountAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllAccountResponse, RpcStatus>({
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
  queryAccountWithName = (
    name: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllAccountResponse, RpcStatus>({
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
  queryAccountWithReview = (
    review: number,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllAccountResponse, RpcStatus>({
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
  queryAccountWallet = (user: string, params: RequestParams = {}) =>
    this.request<MercuryQueryGetAccountResponse, RpcStatus>({
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
  queryAccount = (id: string, params: RequestParams = {}) =>
    this.request<MercuryQueryGetAccountResponse, RpcStatus>({
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
  queryListingAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllListingResponse, RpcStatus>({
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
  queryListingWithName = (
    name: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllListingResponse, RpcStatus>({
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
  queryListingWithReview = (
    review: number,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllListingResponse, RpcStatus>({
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
  queryListingWithSeller = (
    seller: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllListingResponse, RpcStatus>({
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
  queryListing = (id: string, params: RequestParams = {}) =>
    this.request<MercuryQueryGetListingResponse, RpcStatus>({
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
  queryPurchaseAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllPurchaseResponse, RpcStatus>({
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
  queryPurchaseWithBuyer = (
    buyer: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllPurchaseResponse, RpcStatus>({
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
  queryPurchaseWithListing = (
    listing: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllPurchaseResponse, RpcStatus>({
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
  queryPurchase = (id: string, params: RequestParams = {}) =>
    this.request<MercuryQueryGetPurchaseResponse, RpcStatus>({
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
  queryReviewAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllReviewResponse, RpcStatus>({
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
  queryReviewWithReviewed = (
    type: string,
    id: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllReviewResponse, RpcStatus>({
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
  queryReviewWithReviewer = (
    creator: string,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllReviewResponse, RpcStatus>({
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
  queryReviewWithScore = (
    score: number,
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<MercuryQueryAllReviewResponse, RpcStatus>({
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
  queryReview = (id: string, params: RequestParams = {}) =>
    this.request<MercuryQueryGetReviewResponse, RpcStatus>({
      path: `/FloppyDisck/Mercury/Mercury/review/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
