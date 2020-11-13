import React, { CSSProperties } from 'react';
import AnimatedNumber from "animated-number-react";

interface IProps {
    style?: CSSProperties
    children: React.ReactNode
}

const Column = (props : IProps) => {
    const { children, style } = props
    const formatValue = (value : number) => value.toFixed(8);
    if (isNaN(Number(children))) {
        return (
            <div
                style={style}
            >
                {children}
            </div>
        )
    }

    return (
        <div
            style={style}
        >
            <AnimatedNumber
                value={children}
                formatValue = { formatValue }
                delay={2500}
            />
        </div>
    );
}

export default Column