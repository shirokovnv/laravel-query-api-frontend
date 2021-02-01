import { Renderable } from '../../support/renderable';

export class OrWhereNullCondition implements Renderable {
  private kind = 'orWhereNull';

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
