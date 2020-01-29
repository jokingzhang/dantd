/// <reference types="react" />
export interface IRouteSubProps {
    key: string;
    title: string;
    path: string;
    icon?: string;
    exact?: boolean;
    component: React.ComponentType<any>;
}
export interface IRouteCfgProps {
    key: string;
    title: string;
    path: string;
    icon?: string;
    exact?: boolean;
    component: React.ComponentType<any>;
    inMenu?: boolean;
    hide?: boolean;
    routes?: Array<IRouteSubProps>;
}
export declare const routeCfg: IRouteCfgProps[];
