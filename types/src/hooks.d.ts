import { Loadable } from "react-rakun";
import { ZoldyState, ZoldyValue } from "zoldy";
import { Resetter, SetterOrUpdater } from "./types";
export declare const useZoldyValue: <T>(zoldyValue: ZoldyValue<T>) => T;
export declare const useZoldyValueLoadable: <T>(zoldyValue: ZoldyValue<T>) => Loadable<T>;
export declare const useSetZoldyState: <T>(zoldyState: ZoldyState<T>) => SetterOrUpdater<T>;
export declare const useZoldyState: <T>(zoldyState: ZoldyState<T>) => [T, SetterOrUpdater<T>];
export declare const useZoldyStateLoadable: <T>(zoldyState: ZoldyState<T>) => [Loadable<T>, SetterOrUpdater<T>];
export declare const useResetZoldyState: (zoldyState: ZoldyState<any>) => Resetter;
