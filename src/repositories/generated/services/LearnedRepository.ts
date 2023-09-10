/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LearnedIndexResponse } from '../models/LearnedIndexResponse';
import type { LearnedRegisterForm } from '../models/LearnedRegisterForm';
import type { LearnedRegisterResponse } from '../models/LearnedRegisterResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LearnedRepository {

  /**
   * 学び/気づき参照 ※検索,件数指定は後ほど追加予定
   * @returns LearnedIndexResponse OK
   * @throws ApiError
   */
  public static index(): CancelablePromise<Array<LearnedIndexResponse>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/learned/',
    });
  }

  /**
   * 学び/気づき投稿
   * @returns LearnedRegisterResponse OK
   * @throws ApiError
   */
  public static register({
    requestBody,
  }: {
    requestBody: LearnedRegisterForm,
  }): CancelablePromise<LearnedRegisterResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/learned/',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
