/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BookSearchResponse } from './BookSearchResponse';
import type { PageableObject } from './PageableObject';
import type { SortObject } from './SortObject';

export type PageBookSearchResponse = {
  totalPages?: number;
  totalElements?: number;
  size?: number;
  content?: Array<BookSearchResponse>;
  number?: number;
  sort?: SortObject;
  pageable?: PageableObject;
  numberOfElements?: number;
  first?: boolean;
  last?: boolean;
  empty?: boolean;
};

