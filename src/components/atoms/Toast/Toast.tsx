import React from 'react';
import { Toast, type ToastProps } from 'react-bootstrap';

type OwnToastProps = {
    headerTitle: string;
    bodyMessage: string;
    headerProps?: React.HTMLAttributes<HTMLDivElement>;
    bodyProps?: React.HTMLAttributes<HTMLDivElement> & { [key: `data-${string}`]: string };
} & Partial<ToastProps>;

const OwnToast = ({
    headerTitle,
    bodyMessage,
    headerProps,
    bodyProps,
    ...toastProps
}: OwnToastProps) => (
    <Toast {...toastProps}>
        <Toast.Header {...headerProps}>
            <strong className="me-auto">{headerTitle}</strong>
        </Toast.Header>
        <Toast.Body {...bodyProps}>{bodyMessage}</Toast.Body>
    </Toast>
);

export default OwnToast;
