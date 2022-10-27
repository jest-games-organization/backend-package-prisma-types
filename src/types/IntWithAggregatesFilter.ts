import { Enumerable } from '@jest-games-organization/backend-package-object-types';
import { NestedFloatFilter } from './NestedFloatFilter';
import { NestedIntFilter } from './NestedIntFilter';
import { NestedIntWithAggregatesFilter } from './NestedIntWithAggregatesFilter';

export type IntWithAggregatesFilter = {
  equals?: number;
  in?: Enumerable<number>;
  notIn?: Enumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter | number;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
};
