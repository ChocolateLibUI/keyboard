export interface CustomKey {
    label: string;
    text: string;
}

export type CustomKeyRow = CustomKey[];

export interface CustomKeyboard {
    rows: CustomKeyRow[];
}