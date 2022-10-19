import { Enumerable } from './Enumerable';
import { NestedDateTimeNullableFilter } from './NestedDateTimeNullableFilter';

export type DateTimeNullableFilter = {
  equals?: Date | string | null;
  in?: Enumerable<Date> | Enumerable<string> | null;
  notIn?: Enumerable<Date> | Enumerable<string> | null;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: NestedDateTimeNullableFilter | Date | string | null;
};
