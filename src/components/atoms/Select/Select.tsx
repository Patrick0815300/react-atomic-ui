type SelectProps = {
    id: string;
    name: string;
    value: string;
    disabled?: boolean;
    multiple?: boolean;
    autoFocus?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
};

const Select = ({
    id,
    name,
    value,
    disabled = false,
    multiple = false,
    autoFocus = false,
    className,
    onChange,
    children,
}: SelectProps) => (
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
        {children || <option value="">-- Bitte wählen --</option>}
    </select>
);

export default Select