import { Enumerable } from '@jest-games-organization/backend-package-object-types';
import { NestedIntFilter } from './NestedIntFilter';

export type IntFilter = {
  equals?: number;
  in?: Enumerable<number>;
  notIn?: Enumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter | number;
};
