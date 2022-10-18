import { Enumerable } from './Enumerable';

export type WhereInput<Record extends { [key: string]: unknown }> = {
  [key in keyof Record]?: unknown;
} & {
  AND?: Enumerable<WhereInput<Record>>;
  OR?: Enumerable<WhereInput<Record>>;
  NOT?: Enumerable<WhereInput<Record>>;
};
