import { Renderable } from '../../support/renderable';

export class SelectCondition implements Renderable {
  private columns: Array<string>;

  private kind = 'select';

  constructor(columns: Array<string> = []) {
    this.columns = columns;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        columns: this.columns,
      },
    };
  }
}
