import React from 'react';
import { Label, Input } from '../../atoms';
// ErrorText oder HelperText ggf. importieren.

type FormFieldProps = {
    id: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    required: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    autoComplete?: string;
    error?: string;
    type: string;
    helperText?: string;
    style?: React.CSSProperties;
}

const FormField = ({
    id,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    required = false,
    disabled = false,
    readOnly = false,
    autoComplete,
    error, // optionaler Fehlertext 
    type = "text",
    helperText,
    ...props
}: FormFieldProps) => (
    <div style={{ marginBottom: 20 }}>
        <Label htmlFor={id}>
            {label} {/* {required && <span style={{ color: 'red' }}>*</span>} */}
        </Label>
        <Input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            aria-invalid={!!error} // ARIA-Attribut für Barrierefreiheit (Accessibility)
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
        />
        {helperText && !error && (
            <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{helperText}</div>
        )}
        {error && (
            <div id={`${id}-error`} style={{ color: "red", fontSize: 13, marginTop: 4 }}>
                {error}
            </div>
        )}
    </div>
);

export default FormField;