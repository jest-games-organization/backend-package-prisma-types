import { Enumerable } from './Enumerable';

export type NestedDateTimeNullableFilter = {
  equals?: Date | string | null;
  in?: Enumerable<Date> | Enumerable<string> | null;
  notIn?: Enumerable<Date> | Enumerable<string> | null;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: NestedDateTimeNullableFilter | Date | string | null;
};
