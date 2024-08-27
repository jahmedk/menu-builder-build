import * as react_jsx_runtime from 'react/jsx-runtime';
import { UniqueIdentifier } from '@dnd-kit/core';

interface TreeItem {
    id: UniqueIdentifier;
    href?: string;
    children: TreeItem[];
    collapsed?: boolean;
    collapsible?: boolean;
    name: string;
}
type TreeItems = TreeItem[];

interface Props {
    style?: "bordered" | "shadow";
    items: TreeItems;
    setItems(items: ((items: any) => TreeItem[]) | TreeItems): void;
    onDragStart?(activeId: any): void;
    onDragEnd?(): void;
}
declare function MenuBuilder({ style, items: itemsProps, setItems, onDragStart, onDragEnd }: Props): react_jsx_runtime.JSX.Element;

export { MenuBuilder as default };
