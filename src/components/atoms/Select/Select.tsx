import React from 'react';

type Option = {
    value: string;
    label: string;
    disabled?: boolean;
};

type SelectProps = {
    id: string;
    name: string;
    value: string;
    options: Option[];
    disabled?: boolean;
    multiple?: boolean;
    autoFocus?: boolean;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
    id,
    name,
    value,
    options,
    disabled = false,
    multiple = false,
    autoFocus = false,
    className,
    onChange,
}: SelectProps) => {
    return (
        <select
            id={id}
            name={name}
            value={value}
            disabled={disabled}
            multiple={multiple}
            autoFocus={autoFocus}
            className={className}
            onChange={onChange}
        >
            {options.map(({ value: optionValue, label, disabled: optionDisabled }) => (
                <option key={optionValue} value={optionValue} disabled={optionDisabled}>
                    {label}
                </option>
            ))}
        </select>
    );
};

export default Select;
