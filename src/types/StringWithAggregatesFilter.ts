import { Enumerable } from './Enumerable';
import { NestedIntFilter } from './NestedIntFilter';
import { NestedStringFilter } from './NestedStringFilter';
import { NestedStringWithAggregatesFilter } from './NestedStringWithAggregatesFilter';
import { QueryMode } from './QueryMode';

export type StringWithAggregatesFilter = {
  equals?: string;
  in?: Enumerable<string>;
  notIn?: Enumerable<string>;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter | string;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
};
