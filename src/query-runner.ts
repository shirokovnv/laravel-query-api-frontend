import {
  BackendResult
} from './backend-result';
import {
  Query
} from './queries/query';
import {
  QueryResult
} from './query-result';

/**
 * Promise-based query runner example
 */
export class QueryRunner {

  private result: QueryResult;
  private queries: Query[];
  private http: any;
  private apiURL: string;
  private queryMode: string;

  /**
   * 
   * @param http - Http Client instance, axios for ex.
   * @param apiURL - Backend URL endpoint for your queries
   */
  constructor(http: any, apiURL: string) {
    this.result = new QueryResult();
    this.setQueries([]);

    this.setHttp(http);
    this.setApiURL(apiURL);
  }

  private async runQueries(): Promise < BackendResult > {

    const queryData: Query[] = [];
    this.queries.forEach((query: Query) => {
      queryData.push(query.render());
    });

    return await this.http.post(`${this.apiURL}`, {
      /* eslint-disable @typescript-eslint/camelcase */
      query_data: queryData,
      query_mode: this.queryMode
    }).then((response: any) => response.data);
  }

  /**
   * Runs all queries in a whole transaction
   */
  async runTransaction(): Promise < QueryResult > {
    this.setQueryMode('transaction');
    return new Promise((resolve, reject) => {

      this.runQueries().then((backendResult: BackendResult) => {

          this.result.setResult(backendResult);
          if (this.result.hasErrors()) {
            reject(this.result);
          } else {
            resolve(this.result);
          }

        })
        .catch((error: any) => {
          reject(error);
        });

    });
  }

  /**
   * Runs all queries individually
   */
  async runMultiple(): Promise < QueryResult > {
    this.setQueryMode('multiple');
    return new Promise((resolve, reject) => {

      this.runQueries().then((backendResult: BackendResult) => {
          this.result.setResult(backendResult);
          resolve(this.result);
        })
        .catch((error: any) => {
          reject(error);
        });

    });
  }

  addQuery(query: Query): void {
    this.queries.push(query);
  }

  setQueries(queries: Query[]): void {
    this.queries = queries;
  }

  getQueries(): Query[] {
    return this.queries;
  }

  setQueryMode(mode: string) {
    this.queryMode = mode;
  }

  getQueryMode() {
    return this.queryMode;
  }

  getApiURL() {
    return this.apiURL;
  }

  setApiURL(apiURL: string) {
    this.apiURL = apiURL;
  }

  getHttp() {
    return this.http;
  }

  setHttp(http: any) {
    this.http = http;
  }

}
