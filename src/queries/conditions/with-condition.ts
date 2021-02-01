import { Renderable } from '../../support/renderable';

export class WithCondition implements Renderable {
  private tableNameList: string[];

  private kind = 'with';

  constructor(tableNameList: string[]) {
    this.tableNameList = tableNameList;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        table_name_list: this.tableNameList,
      },
    };
  }
}
