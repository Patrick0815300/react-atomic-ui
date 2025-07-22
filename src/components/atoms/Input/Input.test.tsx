import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Input from './Input';

describe('<Input />', () => {
    test('rendered Input erscheint im DOM mit Platzhalter', () => {
        render(<Input placeholder="Dein Name" />);

        const input = screen.getByPlaceholderText(/dein name/i);
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text'); // default type
    });

    test('nimmt Eingaben per userEvent.type entgegen', async () => {
        const user = userEvent.setup();
        render(<Input placeholder="Name" />);

        const input = screen.getByPlaceholderText(/name/i);
        await user.type(input, 'Patrick');

        expect((input as HTMLInputElement).value).toBe('Patrick');
    });

    test('ruft onChange bei Eingabe auf', async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(<Input placeholder="Email" onChange={handleChange} />);

        const input = screen.getByPlaceholderText(/email/i);
        await user.type(input, 'mail@example.com');

        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledTimes('mail@example.com'.length);
    });

    test('ist bei disabled nicht beschreibbar', async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(<Input placeholder="Passwort" disabled onChange={handleChange} />);
        const input = screen.getByPlaceholderText(/passwort/i);

        expect(input).toBeDisabled();
        await user.type(input, 'Geheim123');

        // Sollte keine Änderungen auslösen
        expect(handleChange).not.toHaveBeenCalled();
        expect((input as HTMLInputElement).value).toBe('');
    });

    test('akzeptiert zusätzliche Props (z. B. id, autoComplete)', () => {
        render(<Input id="username" autoComplete="username" placeholder="Benutzername" />);

        const input = screen.getByPlaceholderText(/benutzername/i);

        expect(input).toHaveAttribute('id', 'username');
        expect(input).toHaveAttribute('autocomplete', 'username');
    });
});
