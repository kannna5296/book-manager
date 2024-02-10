/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookDetailResponse } from '../models/BookDetailResponse';
import type { BookRegisterForm } from '../models/BookRegisterForm';
import type { PageBookSearchResponse } from '../models/PageBookSearchResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookRepository {

  /**
   * 書籍情報検索API
   * @returns PageBookSearchResponse 成功
   * @throws ApiError
   */
  public static search({
    id,
    name,
    author,
    page,
    size = 20,
    sort,
  }: {
    /**
     * 書籍ID
     */
    id?: string,
    /**
     * 書籍名
     */
    name?: string,
    /**
     * 著者名
     */
    author?: string,
    /**
     * Zero-based page index (0..N)
     */
    page?: number,
    /**
     * The size of the page to be returned
     */
    size?: number,
    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>,
  }): CancelablePromise<PageBookSearchResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/book',
      query: {
        'id': id,
        'name': name,
        'author': author,
        'page': page,
        'size': size,
        'sort': sort,
      },
    });
  }

  /**
   * 書籍情報登録API
   * @returns any 成功
   * @throws ApiError
   */
  public static register({
    requestBody,
  }: {
    requestBody: BookRegisterForm,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/book',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * 書籍情報詳細取得API
   * @returns BookDetailResponse 成功
   * @throws ApiError
   */
  public static detail({
    bookId,
  }: {
    /**
     * 書籍ID
     */
    bookId: string,
  }): CancelablePromise<BookDetailResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/book/{bookId}',
      path: {
        'bookId': bookId,
      },
    });
  }

}
