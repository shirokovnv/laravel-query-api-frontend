import { Renderable } from '../../support/renderable';

export class OrWhereNotNullCondition implements Renderable {
  private kind = 'orWhereNotNull';

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
