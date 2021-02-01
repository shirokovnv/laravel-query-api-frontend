import { BackendResult } from './backend-result';
import { QueryDataInterface, QueryDataRowInterface } from './support/data-interfaces';
import { QueryErrorsInterface, QueryErrorInterface } from './support/error-interfaces';

export class QueryResult {
  private result: BackendResult;

  hasData(): boolean {
    return Object.keys(this.result.data).length > 0;
  }

  hasErrors(): boolean {
    return Object.keys(this.result.errors).length > 0;
  }

  hasTrace(): boolean {
    return Object.keys(this.result.trace).length > 0;
  }

  hasWarnings(): boolean {
    return Object.keys(this.result.warnings).length > 0;
  }

  getResult(): BackendResult {
    return this.result;
  }

  getErrors(): QueryErrorsInterface {
    return this.result.errors;
  }

  setResult(result: BackendResult): void {
    this.result = result;
  }

  getData(): QueryDataInterface {
    return this.result.data;
  }

  getDataRow(key: string): QueryDataRowInterface {
    return this.result.data[key];
  }

  getContent(key: string): any {
    return this.result.data[key].content;
  }

  getError(key: string): QueryErrorInterface {
    return this.result.errors[key];
  }

  getGlobalErrors(): any {
    return this.result.errors.__global;
  }

  getTrace(key: string): Array<any> {
    return this.result.trace[key];
  }

  getWarning(key: string): Array<string> {
    return this.result.warnings[key];
  }

  hasContent(key: string): boolean {
    return this.hasDataKey(key) && typeof this.result.data[key].content !== 'undefined';
  }

  hasErrorKey(key: string): boolean {
    return this.hasErrors() && typeof this.result.errors[key] !== 'undefined';
  }

  hasDataKey(key: string): boolean {
    return this.hasData() && typeof this.result.data[key] !== 'undefined';
  }

  hasWarningKey(key: string): boolean {
    return this.hasWarnings() && typeof this.result.warnings[key] !== 'undefined';
  }

  hasTraceKey(key: string): boolean {
    return this.hasTrace() && typeof this.result.trace[key] !== 'undefined';
  }
}
