import { Query } from './query';

export class Delete extends Query {
  constructor(type: string, key: string, id: number) {
    super();
    this.setActionName('delete');
    this.setType(type);
    this.setKey(key);
    this.setId(id);
  }

  render(): any {
    return {
      query: this.getActionName(),
      type: this.getType(),
      key: this.getKey(),
      params: {
        id: this.getId(),
      },
    };
  }
}
