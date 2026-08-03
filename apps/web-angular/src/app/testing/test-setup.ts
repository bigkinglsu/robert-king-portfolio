import { expect } from 'vitest';

import { angularHtmlSnapshotSerializer } from './angular-html-snapshot-serializer';

expect.addSnapshotSerializer(angularHtmlSnapshotSerializer);
