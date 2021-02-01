import { Query } from './query';

export class Update extends Query {
  constructor(type: string, key: string, id: number, params: any) {
    super();
    this.setActionName('update');
    this.setType(type);
    this.setKey(key);
    this.setId(id);
    this.setParams(params);
  }

  render(): any {
    return {
      query: this.getActionName(),
      type: this.getType(),
      key: this.getKey(),
      params: {
        id: this.getId(),
        data: this.getParams(),
      },
    };
  }
}
