import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('<Label />', () => {
    test('rendert Children korrekt im DOM', () => {
        render(<Label>Dein Name</Label>);

        const label = screen.getByText(/dein name/i);

        expect(label).toBeInTheDocument();
        expect(label.tagName.toLowerCase()).toBe('label');
    });

    test('setzt korrekt das htmlFor-Attribut', () => {
        render(<Label htmlFor="input-id">E-Mail</Label>);

        const label = screen.getByText(/e-mail/i);
        expect(label).toHaveAttribute('for', 'input-id'); // ⬅️ Wichtig für Barrierefreiheit
    });

    test('nimmt zusätzliche Klassen entgegen', () => {
        render(<Label className="custom-label">Telefon</Label>);

        const label = screen.getByText(/telefon/i);
        expect(label).toHaveClass('custom-label');
    });

    test('akzeptiert zusätzliche Attribute (z. B. data-*)', () => {
        render(<Label data-testid="my-label">Adresse</Label>);

        const label = screen.getByTestId('my-label');
        expect(label).toHaveTextContent(/adresse/i);
    });
});
