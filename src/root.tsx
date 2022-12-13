import React from "react";
import { useMemo } from "react";
import { RakunRoot } from "react-rakun";
import { createSnapshot, zoldySnapshotProvider } from "zoldy";
import { ZoldyRootProps } from "./types";


export const ZoldyRoot = (props: ZoldyRootProps) => {
    const context = useMemo(() => {
        var snapshot = createSnapshot(null)
        if (props.initializeState) {
            props.initializeState(snapshot)
        }
        return zoldySnapshotProvider.define(snapshot);
    }, [])
    return (
        <RakunRoot value={context}>
            {props.children}
        </RakunRoot>
    );

}
