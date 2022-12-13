import { useCallback, useContext, useState } from "react";
import { Loadable, RakunSnapshotContext } from "react-rakun";
import { ZoldyState, ZoldyValue } from "zoldy";
import { Resetter, SetterOrUpdater } from "./types";

export const useZoldyValue = <T>(zoldyValue: ZoldyValue<T>): T => {
    const valueLoadable = useZoldyValueLoadable(zoldyValue);
    if (valueLoadable.state == "hasError")
        throw valueLoadable.contents
    else if (valueLoadable.state == "loading")
        throw valueLoadable.contents
    else
        throw valueLoadable.contents
}


export const useZoldyValueLoadable = <T>(zoldyValue: ZoldyValue<T>): Loadable<T> => {
    const context = useContext(RakunSnapshotContext)
    let setValueLoadable = (_: any) => { }
    const load = useCallback(() => {
        return context.then(zoldyValue.get())
            .doOnNext(contents => setValueLoadable({
                state: "hasValue",
                contents: contents
            }))
            .doOnError(contents => setValueLoadable({
                state: "hasError",
                contents: contents
            }))
            .blockFirst();
    }, []);
    const [valueLoadable, _setValueLoadable] = useState<Loadable<T>>(() => ({
        state: 'loading',
        contents: load(),
    }))
    setValueLoadable = _setValueLoadable
    return valueLoadable;
}



export const useSetZoldyState = <T>(zoldyState: ZoldyState<T>): SetterOrUpdater<T> => {
    const context = useContext(RakunSnapshotContext)
    const set = useCallback((valOrUpdater: ((currVal: T) => T) | T) => {
        context.then(zoldyState.get())
            .flatPipe((oldValue) => {
                if (typeof valOrUpdater == "function") {
                    const updater = valOrUpdater as (currVal: T) => T
                    return zoldyState.set(updater(oldValue))
                }
                else {
                    return zoldyState.set(valOrUpdater)
                }
            })
            .blockFirst();
    }, []);
    return set
}


export const useZoldyState = <T>(zoldyState: ZoldyState<T>): [T, SetterOrUpdater<T>] => {
    return [useZoldyValue(zoldyState), useSetZoldyState(zoldyState)]
}


export const useZoldyStateLoadable = <T>(zoldyState: ZoldyState<T>): [Loadable<T>, SetterOrUpdater<T>] => {
    return [useZoldyValueLoadable(zoldyState), useSetZoldyState(zoldyState)]
}


export const useResetZoldyState = (zoldyState: ZoldyState<any>): Resetter => {
    const context = useContext(RakunSnapshotContext)
    const set = useCallback(() => {
        context.then(zoldyState.reset()).blockFirst();
    }, []);
    return set
}

