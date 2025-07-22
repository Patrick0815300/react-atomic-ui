import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('<Button />', () => {
    test('wird korrekt gerendert und kann geklickt werden', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Klick mich</Button>);

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: /klick mich/i });

        await user.click(button);

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Klick mich');
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('ist bei disabled nicht klickbar', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} disabled>Klick</Button>);

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: /klick/i });

        expect(button).toBeDisabled();
        await user.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });
});
