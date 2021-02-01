import { Renderable } from '../../support/renderable';

export class OrWhereCondition implements Renderable {
  private params: any;

  private kind = 'orWhere';

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
