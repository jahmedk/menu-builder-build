import type { UniqueIdentifier } from "@dnd-kit/core";
import { Props as TreeItemProps } from "./TreeItem";
import { TreeItem as TreeItemType, TreeItems } from "../../types";
interface Props extends TreeItemProps {
    id: UniqueIdentifier;
    childs?: TreeItems;
    show?: string;
    updateitem?: (id: UniqueIdentifier, data: Omit<TreeItemType, "children">) => void;
    otherfields?: any;
}
export declare function SortableTreeItem({ id, depth, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SortableTreeItem.d.ts.map