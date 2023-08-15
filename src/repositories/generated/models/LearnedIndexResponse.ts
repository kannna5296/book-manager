/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LearnedResponse } from './LearnedResponse';

/**
 * 学び/気づき一覧のレスポンス
 */
export type LearnedIndexResponse = {
  /**
   * ID
   */
  id: string;
  /**
   * 投稿日付
   */
  date: string;
  /**
   * 書籍名
   */
  bookName: string;
  /**
   * 学び/気づき一覧のレスポンス
   */
  learnedList: Array<LearnedResponse>;
};

