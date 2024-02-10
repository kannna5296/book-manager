/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookDetailResponse } from '../models/BookDetailResponse';
import type { BookRegisterForm } from '../models/BookRegisterForm';
import type { BookSearchForm } from '../models/BookSearchForm';
import type { Pageable } from '../models/Pageable';
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
    form,
    pageable,
  }: {
    form: BookSearchForm,
    pageable: Pageable,
  }): CancelablePromise<PageBookSearchResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/book',
      query: {
        'form': form,
        'pageable': pageable,
      },
    });
  }

  /**
   * 書籍情報登録API
   * @returns any 成功
   * @throws ApiError
   */
  public static register2({
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
