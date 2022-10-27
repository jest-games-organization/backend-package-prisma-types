import { Enumerable } from '@jest-games-organization/backend-package-object-types';

export type NestedIntNullableFilter = {
  equals?: number | null;
  in?: Enumerable<number> | null;
  notIn?: Enumerable<number> | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | number | null;
};
