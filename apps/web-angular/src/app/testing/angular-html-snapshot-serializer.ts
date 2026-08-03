import type { SnapshotSerializer } from 'vitest';

const ANGULAR_ATTRIBUTE_PREFIXES = ['_ngcontent-', '_nghost-'];

export const angularHtmlSnapshotSerializer: SnapshotSerializer = {
  test: (value): value is HTMLElement => value instanceof HTMLElement,
  serialize: (value: HTMLElement, config, indentation, depth, refs, printer) => {
    const snapshot = value.cloneNode(true) as HTMLElement;

    if (/^root\d+$/.test(snapshot.id)) {
      snapshot.removeAttribute('id');
    }

    for (const element of [snapshot, ...snapshot.querySelectorAll('*')]) {
      for (const attribute of [...element.attributes]) {
        if (
          attribute.name === 'ng-version' ||
          ANGULAR_ATTRIBUTE_PREFIXES.some((prefix) => attribute.name.startsWith(prefix))
        ) {
          element.removeAttribute(attribute.name);
        }
      }
    }

    snapshot.innerHTML = snapshot.innerHTML.replaceAll(
      `${new Date().getFullYear()} Robert King`,
      '[current year] Robert King',
    );

    return printer(snapshot.outerHTML, config, indentation, depth, refs);
  },
};
