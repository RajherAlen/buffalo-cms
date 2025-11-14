import * as migration_20251107_183848_initial from './20251107_183848_initial';
import * as migration_20251113_133855 from './20251113_133855';
import * as migration_20251114_065142 from './20251114_065142';
import * as migration_20251114_074047 from './20251114_074047';

export const migrations = [
  {
    up: migration_20251107_183848_initial.up,
    down: migration_20251107_183848_initial.down,
    name: '20251107_183848_initial',
  },
  {
    up: migration_20251113_133855.up,
    down: migration_20251113_133855.down,
    name: '20251113_133855',
  },
  {
    up: migration_20251114_065142.up,
    down: migration_20251114_065142.down,
    name: '20251114_065142',
  },
  {
    up: migration_20251114_074047.up,
    down: migration_20251114_074047.down,
    name: '20251114_074047'
  },
];
