/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BookDetailRentalResponse } from './BookDetailRentalResponse';

/**
 * 書籍詳細レスポンス
 */
export type BookDetailResponse = {
  id?: string;
  name?: string;
  author?: string;
  rentals?: Array<BookDetailRentalResponse>;
};

