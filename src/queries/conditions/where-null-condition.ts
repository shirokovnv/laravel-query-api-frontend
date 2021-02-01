import { Renderable } from '../../support/renderable';

export class WhereNullCondition implements Renderable {
  private kind = 'whereNull';

  private columnName: string;

  constructor(columnName: string) {
    this.columnName = columnName;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        column_name: this.columnName,
      },
    };
  }
}
