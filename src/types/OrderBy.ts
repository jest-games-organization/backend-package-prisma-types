import { SortOrder } from './SortOrder';

export type OrderBy<Record extends { [key: string]: any }> = {
  [key in keyof Record]?: SortOrder | undefined;
};
