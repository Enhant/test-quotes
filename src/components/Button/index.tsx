import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

interface IProps {
    onClick?: (e: Event) => void;
    to: string;
    className?: string;
    children: React.ReactNode;
}

const useStyles = createUseStyles({
    root: {
        display: 'block',
        borderRadius: 40,
        fontSize: 16,
        fontWeight: 400,
        boxShadow: 'none',
        textTransform: 'none',
        backgroundColor: 'rgba(90, 206, 249, 1)',
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center',
        padding: '10px 20px',
        opacity: 0.9,
        '&:hover, &:active, &:focus': {
            boxShadow: 'none',
            color: 'white',
            opacity: 1,
        },
        '& .MuiButton-label': {
            padding: '0 10px',
        },
    },
});

const Button: React.FC<IProps> = (props) => {
    const classes = useStyles(props);
    return (
        <Link to={props.to} className={`${classes.root} ${props.className}`}>
            {props.children}
        </Link>
    );
};

export default Button;
