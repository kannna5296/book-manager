/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RentalUserRegisterForm } from '../models/RentalUserRegisterForm';
import type { RentalUserUpdateForm } from '../models/RentalUserUpdateForm';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RentalUserRepository {

  /**
   * レンタルユーザ情報更新API
   * @returns any 成功
   * @throws ApiError
   */
  public static update({
    userId,
    requestBody,
  }: {
    /**
     * 書籍ID
     */
    userId: string,
    requestBody: RentalUserUpdateForm,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/user/{userId}',
      path: {
        'userId': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * レンタルユーザ情報登録API
   * @returns any 成功
   * @throws ApiError
   */
  public static register({
    requestBody,
  }: {
    requestBody: RentalUserRegisterForm,
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/user',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
