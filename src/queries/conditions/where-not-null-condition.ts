import { Renderable } from '../../support/renderable';

export class WhereNotNullCondition implements Renderable {
  private kind = 'whereNotNull';

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
