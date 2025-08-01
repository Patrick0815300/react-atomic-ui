type ContactFormPayload = {
    name: string;
    email: string;
    message: string;
};

const endpoint = 'https://patrick-nigrin.dev/sendMail.php';

export async function sendMail(payload: ContactFormPayload): Promise<string> {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify(payload),
    });

    const data = await response.text();

    if (!response.ok) {
        throw new Error(data || 'Fehler beim Senden');
    }

    return data;
}
