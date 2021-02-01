import { Renderable } from '../../support/renderable';

export class WhereNotInCondition implements Renderable {
  private kind = 'whereNotIn';

  private key: string;

  private values: any;

  constructor(key: string, values: any) {
    this.key = key;
    this.values = values;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        key: this.key,
        values: this.values,
      },
    };
  }
}
