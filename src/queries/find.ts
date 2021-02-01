import { Query } from './query';

export class Find extends Query {
  constructor(type: string, key: string, id: number) {
    super();
    this.setActionName('find');
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
