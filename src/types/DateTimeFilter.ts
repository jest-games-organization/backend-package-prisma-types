import { Enumerable } from '@jest-games-organization/backend-package-object-types';
import { NestedDateTimeFilter } from './NestedDateTimeFilter';

export type DateTimeFilter = {
  equals?: Date | string;
  in?: Enumerable<Date> | Enumerable<string>;
  notIn?: Enumerable<Date> | Enumerable<string>;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: NestedDateTimeFilter | Date | string;
};
