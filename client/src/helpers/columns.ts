type Pixels = `${number}px`;

const columnWidthPx = 150;

export const gutterWidthPx = 10;

export const minScreenWidthPxForColumns = (columns: number): number => (gutterWidthPx * (columns + 1)) + (columns * columnWidthPx);

export const minScreenWidthForColumns = (columns: number): Pixels => `${minScreenWidthPxForColumns(columns)}px`;

export const contentWidthPxForColumns = (columns: number): number => (gutterWidthPx * (columns - 1)) + (columns * columnWidthPx);

export const contentWidthForColumns = (columns: number): Pixels => `${contentWidthPxForColumns(columns)}px`;
