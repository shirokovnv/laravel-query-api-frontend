import { isRenderable, Renderable } from '../../support/renderable';

export class OrWhereHasCondition implements Renderable {
  private args: any;

  private subquery: any;

  private kind = 'orWhereHas';

  private relation: string;

  constructor(relation: string, args?: any) {
    this.relation = relation;
    this.args = args;
    this.subquery = isRenderable(this.args) ? this.args.render() : null;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        relation: this.relation,
        subquery: this.subquery,
      },
    };
  }
}
