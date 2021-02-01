import { Renderable } from '../support/renderable';

export abstract class Query implements Renderable {
  static readonly uuidLength = 36;

  static readonly uuidOffset = 2;

  private actionName: string;

  private type: string;

  private key: string;

  private params: any;

  private id: number;

  public getActionName(): string {
    return this.actionName;
  }

  public setActionName(actionName: string): void {
    this.actionName = actionName;
  }

  public getType(): string {
    return this.type;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public setKey(key: string): void {
    this.key = key;
  }

  public getKey(): string {
    return this.key;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getParams(): any {
    return this.params;
  }

  public setParams(params: any): void {
    this.params = params;
  }

  public static makeUUID(): string {
    return (
      Math.random().toString(Query.uuidLength).substring(Query.uuidOffset) +
      new Date().getTime().toString(Query.uuidLength)
    );
  }

  public abstract render(): any;
}
