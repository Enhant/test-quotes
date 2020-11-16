import React, { CSSProperties, useMemo } from 'react';
import AnimatedNumber from 'animated-number-react';

interface IProps {
    style?: CSSProperties;
    children: React.ReactNode;
}

const Column = (props: IProps) => {
    const { children, style } = props;
    const formatValue = (value: number) => value.toFixed(8);

    const column = useMemo(
        () =>
            isNaN(Number(children)) ? (
                <div style={style}>{children}</div>
            ) : (
                <div style={style}>
                    <AnimatedNumber value={children} formatValue={formatValue} delay={500} />
                </div>
            ),
        [children, style],
    );
    return column;
};

export default Column;
