// ContactForm.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ContactForm } from './ContactForm.tsx'

describe('ContactForm Component', () => {
    test('zeigt Erfolgsmeldung bei gültiger Eingabe', async () => {
        render(<ContactForm />)

        // Eingabe-Felder finden
        const nameInput = screen.getByLabelText(/name:/i)
        const mailInput = screen.getByLabelText(/mail:/i)
        const messageInput = screen.getByPlaceholderText(/nachricht/i)
        const submitButton = screen.getByRole('button', { name: /send/i })

        // Werte eingeben
        fireEvent.change(nameInput, { target: { value: 'Max Mustermann' } })
        fireEvent.change(mailInput, { target: { value: 'max@example.com' } })
        fireEvent.change(messageInput, { target: { value: 'Hallo Testnachricht' } })

        // Absenden
        fireEvent.click(submitButton)

        // Erfolgstoast erwarten
        await waitFor(() => {
            expect(screen.getByText(/ihr nachricht wurde erfolgreich verschickt/i)).toBeInTheDocument()
            // Close-Button im Toast finden und testen
            const closeBtn = screen.getByRole('button', { name: /close/i });
            fireEvent.click(closeBtn);
        })

        // Prüfen, ob Eingabefelder geleert wurden
        expect(nameInput).toHaveValue('')
        expect(mailInput).toHaveValue('')
        expect(messageInput).toHaveValue('')
    })
})
