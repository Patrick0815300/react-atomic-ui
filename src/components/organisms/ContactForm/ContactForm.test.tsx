// ContactForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactForm } from './ContactForm';
import { sendEmail } from '../../../utils/sendEmail';

jest.mock('../../../utils/sendEmail');

describe('<ContactForm />', () => {
    test('zeigt Erfolg bei korrekter Eingabe', async () => {
        (sendEmail as jest.Mock).mockResolvedValueOnce({ success: true });

        render(<ContactForm />);

        const nameInput = screen.getByLabelText(/name/i);
        const mailInput = screen.getByLabelText(/mail/i);
        const messageInput = screen.getByLabelText(/message/i);
        const submitButton = screen.getByRole('button', { name: /send/i });

        fireEvent.change(nameInput, { target: { value: 'Max' } });
        fireEvent.change(mailInput, { target: { value: 'max@test.de' } });
        fireEvent.change(messageInput, { target: { value: 'Hallo Welt' } });

        fireEvent.click(submitButton);

        const successToast = await screen.findByTestId('success-toast');
        expect(successToast).toBeInTheDocument();
    });
});
