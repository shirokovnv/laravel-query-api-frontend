import { Renderable } from '../../support/renderable';

export class LimitCondition implements Renderable {
  private limit: number;

  private kind = 'limit';

  constructor(limit: number) {
    this.limit = limit;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        limit: this.limit,
      },
    };
  }
}
