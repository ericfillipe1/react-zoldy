import { RakunMono, Void } from "rakun";
import { ZoldySnapshot } from "zoldy";
export type Resetter = () => void;
export type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;


export type ZoldyRootProps = {
    initializeState?: (mutableSnapshot: ZoldySnapshot) => void,
    children: React.ReactNode,
}



export type RakunRootContext = RakunMono<typeof Void>


export type RakunRootProps = {
    value: RakunMono<any>
    children: React.ReactNode,
} 
