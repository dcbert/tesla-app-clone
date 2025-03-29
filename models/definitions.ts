import { ReactElement } from "react";

export interface ItemData {
    id: string;
    component: ReactElement;
  };

  export interface ItemProps {
    item: ItemData;
  };
  export interface VerticalComponentListProps {
    components: ItemData[];
  };