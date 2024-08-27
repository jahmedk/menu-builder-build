import React, { HTMLAttributes } from "react";
import { TreeItem as TreeItemType, TreeItems } from "../../types";
import { UniqueIdentifier } from "@dnd-kit/core";
export interface Props extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
    childCount?: number;
    clone?: boolean;
    collapsed?: boolean;
    collapsible?: boolean;
    depth: number;
    disableInteraction?: boolean;
    disableSelection?: boolean;
    ghost?: boolean;
    handleProps?: any;
    indicator?: boolean;
    indentationWidth: number;
    value: string;
    onCollapse?(): void;
    onRemove?(): void;
    wrapperRef?(node: HTMLLIElement): void;
    childs?: TreeItems;
    show?: string;
    updateitem?: (id: UniqueIdentifier, data: Omit<TreeItemType, "children">) => void;
    otherfields?: any;
}
export declare const TreeItem: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=TreeItem.d.ts.map