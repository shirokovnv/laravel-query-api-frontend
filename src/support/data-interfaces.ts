export interface QueryDataRowInterface {
  content: any;
}

export interface QueryDataInterface {
  [key: string]: QueryDataRowInterface;
}
