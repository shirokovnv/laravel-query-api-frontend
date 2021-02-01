export interface Renderable {
  render(): any;
}

export function isRenderable(obj?: Object) {
  if (obj === null) return false;
  if (typeof obj === 'undefined') return false;
  return (obj as Renderable).render !== undefined;
}
