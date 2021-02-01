import { Renderable } from '../../support/renderable';

export class WhereColumnCondition implements Renderable {
  private kind = 'whereColumn';

  private columnsList: any;

  constructor(columnsList: any) {
    this.columnsList = columnsList;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        columns_list: this.columnsList,
      },
    };
  }
}
