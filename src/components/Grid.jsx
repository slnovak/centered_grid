import React from 'react';
import { Line } from 'react-konva';

const STROKE = '#ddd';
const STROKE_WIDTH = 0.5;

export default function Grid(props={}) {
    let {
        innerHeight,
        innerWidth,
        gridSize,
    } = props;

    let padding = {
        vertical: (innerWidth / 2 - 0.5 * gridSize) % gridSize,
        horizontal: (innerHeight / 2 - 0.5 * gridSize) % gridSize,
    };

    let lineCounts = {
        vertical: Math.ceil((innerWidth - padding.vertical) / gridSize),
        horizontal: Math.ceil((innerHeight - padding.horizontal) / gridSize),
    };

    let lines = {
        vertical: Array(lineCounts.vertical)
            .fill()
            .map((_, i) => {
                let xCoordinate = padding.vertical + i * gridSize;

                return <Line
                    points={[xCoordinate, 0, xCoordinate, innerHeight]}
                    stroke={STROKE}
                    strokeWidth={STROKE_WIDTH}
                />
            }),
        horizontal: Array(lineCounts.horizontal)
            .fill()
            .map((_, j) => {
                let yCoordinate = padding.horizontal + j * gridSize;

                return <Line
                    points={[0, yCoordinate, innerWidth, yCoordinate]}
                    stroke={STROKE}
                    strokeWidth={STROKE_WIDTH}
                />
            }),
    }

    return lines.vertical.concat(lines.horizontal);
}