import { Component } from "./Component";
export declare type FontWeight = "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export declare type FontVariant = "normal" | "small-caps";
export declare type FontStyle = "normal" | "italic" | "oblique";
export declare type TextBaseline = CanvasTextBaseline;
export declare type TextAlign = CanvasTextAlign;
export declare class Text extends Component {
    readonly type? = "Text";
    constructor(text?: Text);
    text?: string;
    textAlign?: TextAlign;
    textBaseline?: TextBaseline;
    fontVariant?: FontVariant;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    fontSize?: number;
    font?: string;
}
