import { Enumerable } from '@jest-games-organization/backend-package-object-types';
import { NestedDateTimeFilter } from './NestedDateTimeFilter';
import { NestedDateTimeWithAggregatesFilter } from './NestedDateTimeWithAggregatesFilter';
import { NestedIntFilter } from './NestedIntFilter';

export type DateTimeWithAggregatesFilter = {
  equals?: Date | string;
  in?: Enumerable<Date> | Enumerable<string>;
  notIn?: Enumerable<Date> | Enumerable<string>;
  lt?: Date | string;
  lte?: Date | string;
  gt?: Date | string;
  gte?: Date | string;
  not?: NestedDateTimeWithAggregatesFilter | Date | string;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
};
