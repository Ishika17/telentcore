declare module "react-window" {
  import { ComponentType, CSSProperties, ReactNode } from "react";

  export interface FixedSizeListProps {
    height: number | string;
    itemCount: number;
    itemSize: number;
    width: number | string;
    children: ComponentType<{ index: number; style: CSSProperties }>;
    className?: string;
    style?: CSSProperties;
  }

  export class FixedSizeList extends React.Component<FixedSizeListProps> {}
}
