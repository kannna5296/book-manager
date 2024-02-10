/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RentalRegisterForm } from '../models/RentalRegisterForm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RentalRepository {

  /**
   * レンタル情報登録API
   * @returns any 成功
   * @throws ApiError
   */
  public static register1({
    requestBody,
  }: {
    requestBody: RentalRegisterForm,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rental',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
