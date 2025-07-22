import { useState } from 'react';
import { Input, Button } from '../../atoms';

type SearchBarProp = {
    placeholder?: string;
    onSearch?: (value: string) => void;
    buttonLabel?: string;
    disabled?: boolean;
    inputClassName?: string;
    id: string;
    name: string;
}

const SearchBar = ({
    placeholder = "Suchbegriff...",
    onSearch,
    buttonLabel = "Suchen",
    disabled = false,
    inputClassName = '',
    id,
    name,
    ...props
}: SearchBarProp) => {
    const [value, setValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSearch) onSearch(value);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }} {...props}>
            <Input
                id={id}
                name={id}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                disabled={disabled}
                aria-label="Suchfeld"
                className={inputClassName}
            />
            <Button type="submit" disabled={disabled || !value.trim()}>
                {buttonLabel}
            </Button>
        </form>
    );
};

export default SearchBar;