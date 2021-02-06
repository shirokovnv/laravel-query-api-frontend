export interface QueryErrorInterface {
  category: string;
  content: {
    code?: string;
    file?: string;
    line?: number;
    message: string;
    errors?: Array<any>;
    trace?: Array<any>;
  };
}

export interface QueryErrorsInterface {
  [key: string]: QueryErrorInterface;
}
