import { QueryDataInterface } from './support/data-interfaces';
import { QueryErrorsInterface } from './support/error-interfaces';
import { QueryWarningsInterface } from './support/warnings-interface';
import { QueryTraceInterface } from './support/trace-interface';

export interface BackendResult {
  data: QueryDataInterface;
  errors: QueryErrorsInterface;
  trace: QueryTraceInterface;
  warnings: QueryWarningsInterface;
}
