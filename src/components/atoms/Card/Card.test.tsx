import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
    test('rendert die übergebenen Children', () => {
        render(
            <Card>
                <p>Testinhalt in der Karte</p>
            </Card>
        );

        expect(screen.getByText(/testinhalt/i)).toBeInTheDocument();
    });

    test('übernimmt zusätzlich übergebene className', () => {
        render(<Card className="custom-card">Inhalt</Card>);

        const card = screen.getByText(/inhalt/i);
        expect(card).toHaveClass('custom-card');
    });

    test('nimmt inline styles korrekt an', () => {
        render(
            <Card style={{ backgroundColor: 'red', padding: '16px' }}>
                Styled Card
            </Card>
        );

        const card = screen.getByText(/styled card/i);
        expect(card).toHaveStyle('background-color: rgb(255, 0, 0)');
        expect(card).toHaveStyle('padding: 16px');
    });


    test('akzeptiert zusätzliche Props wie data-testid', () => {
        render(
            <Card data-testid="test-card">
                <span>Ich bin ein Card-Inhalt</span>
            </Card>
        );

        const card = screen.getByTestId('test-card');
        expect(card).toBeInTheDocument();
        expect(card).toHaveTextContent(/ich bin ein card-inhalt/i);
    });
});
