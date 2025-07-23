import emailjs from '@emailjs/browser';

export const sendEmail = async (formRef: HTMLFormElement): Promise<{ success: boolean; error?: string }> => {
    try {
        await emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            formRef,
            import.meta.env.VITE_PUBLIC_KEY
        );
        return { success: true };
    } catch (error: any) {
        return {
            success: false,
            error: error?.text || 'unbekannter Fehler',
        };
    }
};

