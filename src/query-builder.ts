import * as queries from './queries/index';

export class QueryBuilder {
  public static create(type: string, key: string, params: any): queries.CreateQuery {
    return new queries.CreateQuery(type, key, params);
  }

  public static custom(type: string, key: string, params: any): queries.CustomQuery {
    return new queries.CustomQuery(type, key, params);
  }

  public static delete(type: string, key: string, id: number): queries.DeleteQuery {
    return new queries.DeleteQuery(type, key, id);
  }

  public static fetch(type: string, key: string): queries.FetchQuery {
    return new queries.FetchQuery(type, key);
  }

  public static find(type: string, key: string, id: number): queries.FindQuery {
    return new queries.FindQuery(type, key, id);
  }

  public static update(type: string, key: string, id: number, params: any): queries.UpdateQuery {
    return new queries.UpdateQuery(type, key, id, params);
  }
}
