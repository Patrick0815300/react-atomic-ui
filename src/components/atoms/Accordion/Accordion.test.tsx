import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordionMolecule from './Accordion';

describe('AccordionMolecule', () => {
    const items = [
        { headerTitle: 'Header 1', bodyText: 'Body 1' },
        { headerTitle: 'Header 2', bodyText: 'Body 2' },
    ];

    test('renders all header titles', () => {
        render(<AccordionMolecule array={items} />);
        expect(screen.getByText('Header 1')).toBeInTheDocument();
        expect(screen.getByText('Header 2')).toBeInTheDocument();
    });

    test('does not show body text initially', () => {
        render(<AccordionMolecule array={items} />);
        const body1 = screen.getByText('Body 1').closest('.accordion-collapse');
        const body2 = screen.getByText('Body 2').closest('.accordion-collapse');
        expect(body1).not.toHaveClass('show');
        expect(body2).not.toHaveClass('show');
    });

    test('shows body text when header is clicked', async () => {
        render(<AccordionMolecule array={items} />);
        const header1 = screen.getByText('Header 1');
        fireEvent.click(header1);

        const body1 = screen.getByText('Body 1').closest('.accordion-collapse');

        await waitFor(() => {
            expect(body1).toHaveClass('show');
        });
    });
});
