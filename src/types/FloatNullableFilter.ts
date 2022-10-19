import { Enumerable } from './Enumerable';
import { NestedFloatFilter } from './NestedFloatFilter';

export type FloatNullableFilter = {
  equals?: number | null;
  in?: Enumerable<number>;
  notIn?: Enumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter | number | null;
};
