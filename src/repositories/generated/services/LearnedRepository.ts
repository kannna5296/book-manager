/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LearnedIndexResponse } from '../models/LearnedIndexResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LearnedRepository {

  /**
   * 学び/気づき参照 ※検索,件数指定は後ほど追加予定
   * @returns LearnedIndexResponse OK
   * @throws ApiError
   */
  public static index(): CancelablePromise<LearnedIndexResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/learned/',
    });
  }

}
