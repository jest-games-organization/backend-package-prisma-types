import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { SortOrder } from './SortOrder';

export type OrderByInput<Record extends DataObject> = {
  [key in keyof Record]?: SortOrder | undefined;
};
