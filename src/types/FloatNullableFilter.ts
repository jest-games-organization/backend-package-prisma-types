import { Enumerable } from './Enumerable';
import { NestedFloatFilter } from './NestedFloatFilter';

export type FloatNullableFilter = {
  equals?: number | null;
  in?: Enumerable<number> | null;
  notIn?: Enumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter | number | null;
};
