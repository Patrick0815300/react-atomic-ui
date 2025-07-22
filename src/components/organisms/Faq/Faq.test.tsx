import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Faq } from './Faq';

describe('<Faq />', () => {
    test('zeigt Überschrift und Beschreibung korrekt an', () => {
        render(<Faq />);

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/häufig gestellte fragen/i);
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/Das sind die am häufig gestellten Fragen. Wenn du etwas nicht finden solltest kontaktiere uns sehr gern persönlich/i);

        // Link in Beschreibung
        const link = screen.getByRole('link', { name: /kontaktiere/i });
        expect(link).toHaveAttribute('href', '#');
    });

    test('zeigt die Suchleiste (SearchBar) an', () => {
        render(<Faq />);
        const searchInput = screen.getByRole('textbox', { name: /suchfeld/i });
        expect(searchInput).toBeInTheDocument();
    });

    test('rendert alle FAQ-Buttons mit Icons & Text', () => {
        render(<Faq />);

        const allButtons = screen.getAllByRole('button');
        const faqButtons = allButtons.filter(btn => btn.className.includes('faqButton'));

        expect(faqButtons).toHaveLength(3);
        expect(faqButtons[0]).toHaveTextContent(/thema a/i);
        expect(faqButtons[1]).toHaveTextContent(/thema b/i);
        expect(faqButtons[2]).toHaveTextContent(/thema c/i);
    });

    test('zeigt Accordion Einträge für Fragen an', () => {
        render(<Faq />);

        // Headers prüfen
        expect(screen.getByText('Das ist die 1')).toBeInTheDocument();
        expect(screen.getByText('Das ist die 2')).toBeInTheDocument();

        // Optional: Body-Texte prüfen (falls Akkordeon offen ist)
        expect(screen.getByText('Hier ist der Body 1')).toBeInTheDocument();
        expect(screen.getByText('Hier ist der Body 2')).toBeInTheDocument();
    });
});
