import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Picture from './Picture';

describe('<Picture />', () => {
    const srcBase = '/images/photo';
    const altText = 'Mein Testbild';

    test('rendert picture mit <img> und alt-Text', () => {
        render(<Picture srcBase={srcBase} alt={altText} />);

        const img = screen.getByAltText(altText);
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', `${srcBase}.jpg`);
    });

    test('enthält <source> für avif und webp', () => {
        render(<Picture srcBase={srcBase} alt={altText} />);
        const sources = screen.getByAltText(altText).previousSibling?.parentElement?.childNodes;

        const sourceArray = Array.from((sources as NodeListOf<HTMLElement>));

        const avif = sourceArray.find((el) => el instanceof HTMLSourceElement && el.type === 'image/avif');
        const webp = sourceArray.find((el) => el instanceof HTMLSourceElement && el.type === 'image/webp');

        expect(avif).toBeDefined();
        expect((avif as HTMLSourceElement)?.srcset).toBe(`${srcBase}.avif`);
        expect(webp).toBeDefined();
        expect((webp as HTMLSourceElement)?.srcset).toBe(`${srcBase}.webp`);
    });

    test('übergibt className korrekt an <picture> und <img>', () => {
        render(
            <Picture
                srcBase={srcBase}
                alt="Testbild"
                className="picture-style"
                imageClassName="image-style"
            />
        );

        const picture = screen.getByRole('img').parentElement!;
        const img = screen.getByRole('img');

        expect(picture).toHaveClass('picture-style');
        expect(img).toHaveClass('image-style');
    });

    test('setzt fetchPriority korrekt auf eager inkl. loading=eager', () => {
        render(<Picture srcBase={srcBase} alt={altText} fetchPriority="high" />);
        const img = screen.getByAltText(altText);

        expect(img).toHaveAttribute('fetchpriority', 'high');
        expect(img).toHaveAttribute('loading', 'eager');
    });

    test('verwendet loading=lazy bei fetchPriority=low', () => {
        render(<Picture srcBase={srcBase} alt={altText} fetchPriority="low" />);
        const img = screen.getByAltText(altText);

        expect(img).toHaveAttribute('loading', 'lazy');
    });
});
