import React from 'react';
import { type LabelHTMLAttributes, type PropsWithChildren } from 'react';
import './Label.modules.css';

type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>;

const Label = ({ children, htmlFor, className = '', ...props }: LabelProps) => (
    <label htmlFor={htmlFor} className={`${'label'} ${className}`} {...props}>
        {children}
    </label>
);

export default Label;