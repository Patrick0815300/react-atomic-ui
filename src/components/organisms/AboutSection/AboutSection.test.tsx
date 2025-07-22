import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AboutSection } from './AboutSection';

describe('<AboutSection />', () => {
    const mockStorys = [
        { title: 'Unsere Geschichte', text: 'Sie begann in 1995' },
        { title: 'Werte', text: 'Vertrauen und Innovation' }
    ];

    const mockMembers = [
        { name: 'Max Mustermann', position: 'CEO', imageSrc: '/team/max' },
        { name: 'Lisa Beispiel', position: 'CTO', imageSrc: '/team/lisa' }
    ];

    const defaultProps = {
        members: mockMembers,
        storys: mockStorys,
        headline: 'Über uns',
        subheadline: 'Wer wir sind',
        imageHistory: '/assets/history',
        altImgHistory: 'Historisches Firmenbild'
    };

    test('rendert Headline und Subheadline korrekt', () => {
        render(<AboutSection {...defaultProps} />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Über uns');
        expect(screen.getByText(/wer wir sind/i)).toBeInTheDocument();
    });

    test('zeigt fallback Texte, wenn headline/subheadline fehlen', () => {
        render(<AboutSection {...defaultProps} headline={undefined} subheadline={undefined} />);

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Headline');
        expect(screen.getByText('Subheadline')).toBeInTheDocument();
    });

    test('rendert das History-Bild korrekt', () => {
        render(<AboutSection {...defaultProps} />);

        const img = screen.getByAltText('Historisches Firmenbild');
        expect(img).toHaveAttribute('src', expect.stringContaining('.jpg'));
    });

    test('rendert alle Story-Karten korrekt', () => {
        render(<AboutSection {...defaultProps} />);
        for (const story of mockStorys) {
            expect(screen.getByText(story.title)).toBeInTheDocument();
            expect(screen.getByText(story.text)).toBeInTheDocument();
        }
    });

    test('zeigt alle Teammitglieder korrekt an', () => {
        render(<AboutSection {...defaultProps} />);
        for (const member of mockMembers) {
            expect(screen.getByText(member.name)).toBeInTheDocument();
            expect(screen.getByText(member.position)).toBeInTheDocument();
            const img = screen.getByAltText(member.name);
            expect(img).toHaveAttribute('src', expect.stringContaining('.jpg'));
        }
    });
});
