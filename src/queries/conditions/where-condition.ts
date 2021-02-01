import { Renderable } from '../../support/renderable';

export class WhereCondition implements Renderable {
  private params: any;

  private kind = 'where';

  constructor(params: any) {
    this.params = params;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        params: this.params,
      },
    };
  }
}
