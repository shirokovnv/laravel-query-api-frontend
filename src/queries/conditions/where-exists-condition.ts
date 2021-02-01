import { Renderable } from '../../support/renderable';

export class WhereExistsCondition implements Renderable {
  private kind = 'whereExists';

  private select: string;

  private from: string;

  private where: string;

  constructor(select: string, from: string, where: string) {
    this.select = select;
    this.from = from;
    this.where = where;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        select: this.select,
        from: this.from,
        where: this.where,
      },
    };
  }
}
