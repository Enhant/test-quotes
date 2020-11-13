import React, { ReactElement, Children, cloneElement } from 'react';
import { createUseStyles } from 'react-jss';
import {IColumn} from 'types';
import {columnWidth} from './index'

interface IProps {
    children: React.ReactNode
    columns: IColumn[] | string[]
}

const useStyles = createUseStyles({
    root: ({columns}) => ({
        display: 'grid',
        gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, auto)` : columns.join(' '),
        margin: 'auto',
        width: columns.length * columnWidth,
        textAlign: 'center'
    })
})

const Grid : React.FC<IProps> = (props) => {
    const classes = useStyles(props);
    const childrenArray = Children.toArray(props.children)
    return (
        <div className={classes.root}>
            {childrenArray.map(row => {
                const { children, style } = (row as ReactElement).props
                return Children.toArray(children).map(column => {
                    return cloneElement(column as ReactElement, { rowStyle: style })
                })
            })}
        </div>
    )
}

export default Grid;