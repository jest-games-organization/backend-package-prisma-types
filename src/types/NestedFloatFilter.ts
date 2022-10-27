import { Enumerable } from '@jest-games-organization/backend-package-object-types';

export type NestedFloatFilter = {
  equals?: number;
  in?: Enumerable<number>;
  notIn?: Enumerable<number>;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter | number;
};
