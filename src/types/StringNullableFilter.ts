import { Enumerable } from '@jest-games-organization/backend-package-object-types';
import { NestedStringNullableFilter } from './NestedStringNullableFilter';
import { QueryMode } from './QueryMode';

export type StringNullableFilter = {
  equals?: string | null;
  in?: Enumerable<string> | null;
  notIn?: Enumerable<string> | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter | string | null;
};
