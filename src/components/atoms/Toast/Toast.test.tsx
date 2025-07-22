import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OwnToast from './Toast';

describe('<OwnToast />', () => {
    const defaultProps = {
        headerTitle: 'Info',
        bodyMessage: 'Das ist ein Toast!',
    };

    test('rendered Header und Body erscheinen korrekt', () => {
        render(<OwnToast {...defaultProps} show={true} />);

        expect(screen.getByText(/info/i)).toBeInTheDocument();
        expect(screen.getByText(/das ist ein toast/i)).toBeInTheDocument();
    });

    test('nimmt zusätzliche Header- und Body-Props auf', () => {
        render(
            <OwnToast
                {...defaultProps}
                show={true}
                headerProps={{ className: 'bg-success', title: 'Header Titel' }}
                bodyProps={{ 'data-testid': 'body-section', style: { fontWeight: 'bold' } }}
            />
        );

        const header = screen.getByText(/info/i).closest('div')!;
        expect(header).toHaveClass('bg-success');
        expect(header).toHaveAttribute('title', 'Header Titel');

        const body = screen.getByTestId('body-section');
        expect(body).toBeInTheDocument();
        expect(body).toHaveStyle('font-weight: bold');
    });

    test('ruft onClose Callback bei Schließen auf', () => {
        const onCloseMock = jest.fn();

        render(<OwnToast {...defaultProps} show={true} onClose={onCloseMock} />);

        // Der Button für close sitzt in .toast-header laut react-bootstrap
        const closeButton = screen.getByRole('button', { name: /close/i });

        fireEvent.click(closeButton);
        expect(onCloseMock).toHaveBeenCalled();
    });

    test('ist sichtbar, wenn `show=true`', () => {
        render(<OwnToast {...defaultProps} show={true} />);
        const toast = screen.getByText(/das ist ein toast/i).closest('[role="alert"]');
        expect(toast).toBeVisible();
    });

    test('wird nicht gerendert, wenn `show=false`', () => {
        render(<OwnToast {...defaultProps} show={false} />);
        const body = screen.queryByText(/das ist ein toast/i);
        expect(body).not.toBeInTheDocument();
    });
});
