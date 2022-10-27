import { Enumerable } from '@jest-games-organization/backend-package-object-types';
import { NestedIntNullableFilter } from './NestedIntNullableFilter';
import { NestedStringNullableFilter } from './NestedStringNullableFilter';
import { NestedStringNullableWithAggregatesFilter } from './NestedStringNullableWithAggregatesFilter';
import { QueryMode } from './QueryMode';

export type StringNullableWithAggregatesFilter = {
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
  not?: NestedStringNullableWithAggregatesFilter | string | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
};
