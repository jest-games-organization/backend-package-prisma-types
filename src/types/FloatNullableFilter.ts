import { Enumerable } from './Enumerable';
import { NestedFloatNullableFilter } from './NestedFloatNullableFilter';

export type FloatNullableFilter = {
  equals?: number | null;
  in?: Enumerable<number> | null;
  notIn?: Enumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatNullableFilter | number | null;
};
