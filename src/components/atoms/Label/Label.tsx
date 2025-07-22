import React from 'react';
import { type LabelHTMLAttributes, type PropsWithChildren } from 'react';
import styles from './Label.module.css';

type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>;

const Label = ({ children, htmlFor, className = '', ...props }: LabelProps) => (
    <label htmlFor={htmlFor} className={`${styles.label} ${className}`} {...props}>
        {children}
    </label>
);

export default Label;