import React from 'react';
import { type HTMLAttributes, type PropsWithChildren } from 'react';
import styles from './Card.module.css';

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const Card = ({ children, style, className = '', ...props }: CardProps) => (
    <div className={`${styles.card} ${className}`} style={style} {...props}>
        {children}
    </div>
);

export default Card;