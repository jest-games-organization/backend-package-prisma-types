import { Enumerable } from './Enumerable';
import { NestedIntFilter } from './NestedIntFilter';

export type IntNullableFilter = {
  equals?: number | null;
  in?: Enumerable<number> | null;
  notIn?: Enumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter | number | null;
};
