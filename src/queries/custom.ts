import { Query } from './query';

export class Custom extends Query {
  constructor(type: string, key: string, params: any) {
    super();
    this.setActionName('update');
    this.setType(type);
    this.setKey(key);
    this.setParams(params);
  }

  render(): any {
    return {
      query: this.getActionName(),
      type: this.getType(),
      key: this.getKey(),
      params: this.getParams(),
    };
  }
}
