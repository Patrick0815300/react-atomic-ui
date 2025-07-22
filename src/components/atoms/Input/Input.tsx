import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            name,
            type = "text",
            value,
            onChange,
            onBlur,
            placeholder,
            required,
            disabled,
            readOnly,
            autoComplete,
            className = "",
            ...props
        },
        ref
    ) => (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            ref={ref}
            className={`${styles.input} ${className}`}
            {...props}
        />
    )
);

export default Input;