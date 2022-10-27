import { DataObject, Enumerable } from '@jest-games-organization/backend-package-object-types';

export type WhereInput<Record extends DataObject> = {
  [key in keyof Record]?: any;
} & {
  AND?: Enumerable<WhereInput<Record>>;
  OR?: Enumerable<WhereInput<Record>>;
  NOT?: Enumerable<WhereInput<Record>>;
};
