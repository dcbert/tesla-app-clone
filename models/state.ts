import { ReactElement } from "react";

export interface carInfo {
  id: string;
  component: ReactElement;
  name: string;
  batteryPercentage: number;
  remainingRange: number;
  isCharging: boolean;
}
export interface appMenuItem {
  id: string;
  title: string;
  icon: string;
  href: string;
}
export interface quickControlItem {
  id: string;
  icon: string;
}
export interface appConfiguration {
  activeMenus: appMenuItem[];
  quickControls: quickControlItem[];
}

export interface state {
  car: carInfo;
  appConfiguration: appConfiguration;
}
