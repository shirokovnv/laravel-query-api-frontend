import { Renderable } from '../../support/renderable';

export class ScopeCondition implements Renderable {
  private name: string;

  private params: any;

  private kind = 'scope';

  constructor(name: string, params: any = null) {
    this.name = name;
    this.params = params;
  }

  render(): any {
    return {
      kind: this.kind,
      args: {
        name: this.name,
        params: this.params,
      },
    };
  }
}
