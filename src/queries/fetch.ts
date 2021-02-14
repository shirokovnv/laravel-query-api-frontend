import { Renderable } from '../support/renderable';
import { Query } from './query';
import * as conditions from './conditions/index';

export class Fetch extends Query {
  private conditionChain: Renderable[] = [];

  private perPage: number;

  private pageNumber: number;

  constructor(type: string, key: string) {
    super();
    this.setActionName('fetch');
    this.setType(type);
    this.setKey(key);
  }

  select(columns: Array<string>): Fetch {
    this.conditionChain.push(new conditions.SelectCondition(columns));
    return this;
  }

  orWhere(condition: any): Fetch {
    this.conditionChain.push(new conditions.OrWhereCondition(condition));
    return this;
  }

  orWhereDoesntHave(relation: string, condition: any): Fetch {
    const q: Query = new Fetch(relation, Fetch.makeUUID());
    this.conditionChain.push(new conditions.OrWhereDoesntHaveCondition(relation, condition(q)));
    return this;
  }

  scope(name: string, params: any): Fetch {
    this.conditionChain.push(new conditions.ScopeCondition(name, params));
    return this;
  }

  where(condition: any): Fetch {
    this.conditionChain.push(new conditions.WhereCondition(condition));
    return this;
  }

  whereHas(relation: string, condition?: any): Fetch {
    const q: Query = new Fetch(relation, Fetch.makeUUID());
    const subCondition = typeof condition === 'function' ? condition(q) : null;

    this.conditionChain.push(new conditions.WhereHasCondition(relation, subCondition));
    return this;
  }

  orWhereHas(relation: string, condition: any): Fetch {
    const q: Query = new Fetch(relation, Fetch.makeUUID());
    this.conditionChain.push(new conditions.OrWhereHasCondition(relation, condition(q)));
    return this;
  }

  whereDoesntHave(relation: string, condition: any): Fetch {
    const q: Query = new Fetch(relation, Fetch.makeUUID());
    this.conditionChain.push(new conditions.WhereDoesntHaveCondition(relation, condition(q)));
    return this;
  }

  whereIn(key: string, values: any): Fetch {
    this.conditionChain.push(new conditions.WhereInCondition(key, values));
    return this;
  }

  whereNotIn(key: string, values: any): Fetch {
    this.conditionChain.push(new conditions.WhereNotInCondition(key, values));
    return this;
  }

  whereNull(columnName: string): Fetch {
    this.conditionChain.push(new conditions.WhereNullCondition(columnName));
    return this;
  }

  whereNotNull(columnName: string): Fetch {
    this.conditionChain.push(new conditions.WhereNotNullCondition(columnName));
    return this;
  }

  orWhereNull(columnName: string): Fetch {
    this.conditionChain.push(new conditions.OrWhereNullCondition(columnName));
    return this;
  }

  orWhereNotNull(columnName: string): Fetch {
    this.conditionChain.push(new conditions.OrWhereNotNullCondition(columnName));
    return this;
  }

  whereColumn(columnsList: any): Fetch {
    this.conditionChain.push(new conditions.WhereColumnCondition(columnsList));
    return this;
  }

  whereExists(select: string, from: string, where: string): Fetch {
    this.conditionChain.push(new conditions.WhereExistsCondition(select, from, where));
    return this;
  }

  with(tableNameList: string[]): Fetch {
    this.conditionChain.push(new conditions.WithCondition(tableNameList));
    return this;
  }

  limit(limit: number): Fetch {
    this.conditionChain.push(new conditions.LimitCondition(limit));
    return this;
  }

  offset(offset: number): Fetch {
    this.conditionChain.push(new conditions.OffsetCondition(offset));
    return this;
  }

  paginate(pageNumber: number, perPage: number): Fetch {
    this.pageNumber = pageNumber;
    this.perPage = perPage;
    return this;
  }

  render(): any {
    const result: any = [];

    this.conditionChain.forEach((cond: Renderable) => {
      result.push(cond.render());
    });

    let pagination = {};
    if (this.perPage) {
      pagination = { per_page: this.perPage };
    }

    if (this.pageNumber) {
      pagination = { ...pagination, page: this.pageNumber };
    }

    return {
      query: this.getActionName(),
      key: this.getKey(),
      type: this.getType(),
      params: {
        ...pagination,
        parts: result,
      },
    };
  }
}
