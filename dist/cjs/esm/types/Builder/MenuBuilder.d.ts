import "./builder.css";
import type { TreeItem, TreeItems } from "./types";
interface Props {
    style?: "bordered" | "shadow";
    items: TreeItems;
    setItems(items: ((items: any) => TreeItem[]) | TreeItems): void;
    onDragStart?(activeId: any): void;
    onDragEnd?(): void;
}
export declare function MenuBuilder({ style, items: itemsProps, setItems, onDragStart, onDragEnd }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MenuBuilder.d.ts.map