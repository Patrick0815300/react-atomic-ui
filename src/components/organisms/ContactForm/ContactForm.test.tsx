// ContactForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactForm } from './ContactForm';

describe('<ContactForm />', () => {
    test('zeigt Erfolg bei korrekter Eingabe', async () => {

        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/name/i);
        const mailInput = screen.getByLabelText(/mail/i);
        const messageInput = screen.getByLabelText(/message/i);
        const checkboxInput = screen.getByRole('checkbox', { name: /datenschutzrichtlinie/i });
        const submitButton = screen.getByRole('button', { name: /send/i });

        fireEvent.change(nameInput, { target: { value: 'Max' } });
        fireEvent.change(mailInput, { target: { value: 'max@test.de' } });
        fireEvent.change(messageInput, { target: { value: 'Hallo Welt' } });

        fireEvent.click(checkboxInput);

        expect(submitButton).not.toBeDisabled();

        fireEvent.click(submitButton);

        const successToast = await screen.findByTestId('success-toast', {}, { timeout: 3000 });
        expect(successToast).toBeInTheDocument();

        expect(fetch).toHaveBeenCalledWith(
            'https://patrick-nigrin.dev/sendMail.php',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    name: 'Max Mustermann',
                    email: 'max@test.de',
                    message: 'Hallo Welt',
                }),
            })
        );
    });
});
