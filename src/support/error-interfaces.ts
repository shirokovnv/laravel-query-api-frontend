export interface QueryErrorInterface {
  category: string;
  content: {
    code?: string;
    file?: string;
    line?: number;
    message: string;
    errors?: any;
    trace?: any;
  };
}

export interface QueryErrorsInterface {
  [key: string]: QueryErrorInterface;
}
