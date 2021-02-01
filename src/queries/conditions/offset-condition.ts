import { Renderable } from '../../support/renderable';

export class OffsetCondition implements Renderable {
  private offset: number;

  private kind = 'offset';

  constructor(offset: number) {
    this.offset = offset;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        offset: this.offset,
      },
    };
  }
}
