import React from 'react';
import Grid from './Grid';
import { IColumn, IData, IError } from 'types';
import Column from './Column';
import Error from 'components/Error';

interface IProps {
    columns: IColumn[];
    data: IData[];
    error: IError | boolean;
}

type cellsType = 'name' | 'last' | 'highestBid' | 'percentChange';

export const columnWidth = 200;

const Table: React.FC<IProps> = (props) => {
    const { data, columns, error } = props;
    if (error) {
        return <Error />;
    }
    return (
        <Grid
            columns={columns.map((column) => {
                return column.width === undefined ? 'min-content' : column.width;
            })}
        >
            <div
                style={{
                    whiteSpace: 'nowrap',
                    padding: 16,
                    backgroundColor: '#f1f1f1',
                    position: 'sticky',
                    top: 0,
                }}
            >
                {columns.map((column) => (
                    <Column key={column.name}>{column.name}</Column>
                ))}
            </div>
            {data.map((row) => (
                <div key={`${row.id}1`} style={{ padding: 16 }}>
                    {columns.map((column) => (
                        <Column
                            key={`${row.id}${column.cell}`}
                            style={{
                                whiteSpace: 'nowrap',
                                backgroundColor: '#ffffff',
                                left: 0,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: columnWidth,
                            }}
                        >
                            {row[column.cell as cellsType]}
                        </Column>
                    ))}
                </div>
            ))}
        </Grid>
    );
};

export default Table;
