import React from 'react';
import useWindowSize from '@rehooks/window-size';
import { Stage, Layer } from 'react-konva'

import Grid from './Grid';

const GRID_SIZE = 80;

export default function Scene(props={}) {
    let { innerHeight, innerWidth } = useWindowSize();

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Grid
                    innerHeight={innerHeight}
                    innerWidth={innerWidth}
                    gridSize={GRID_SIZE}
                />
            </Layer>
        </Stage>
    )
}