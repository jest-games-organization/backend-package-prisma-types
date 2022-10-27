import { Enumerable } from '@jest-games-organization/backend-package-object-types';
import { NestedStringFilter } from './NestedStringFilter';
import { QueryMode } from './QueryMode';

export type StringFilter = {
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
  not?: NestedStringFilter | string;
};
