import path from 'node:path';

export const slugFromFile = (file: string) => path.parse(file).name
