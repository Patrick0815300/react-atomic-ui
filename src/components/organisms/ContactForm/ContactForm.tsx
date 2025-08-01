import React, { useState, useRef, useEffect } from 'react'
import { FormField } from '../../moleculess'
import { Button, Label, Card, OwnToast } from '../../atoms'
import { ToastContainer } from 'react-bootstrap'
import inputStyles from '../../atoms/Input/Input.module.css'
import { sendMail } from '../../../utils/sendMail.ts'
import './ContactForm.modules.css'



export function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true)
    const [agreed, setAgreed] = useState(false);
    const handleCloseSuccess = () => setShowSuccess(false);
    const handleCloseError = () => setShowError(false);

    const formRef = useRef<HTMLFormElement | null>(null);

    const isTestEnvironment = () => process.env.NODE_ENV === 'test';

    const handleButtonDisable = useEffect(() => {
        if (validateEmail(form.email) && validateName(form.name)) {
            setDisabled(false)
        }
    }, [form && agreed])

    const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreed(e.target.checked);
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const stateProp = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [stateProp]: value })
    }

    const onSubmitChange = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateEmail(form.email) && validateName(form.name)) {
            try {
                await sendMail(form);
                setDisabled(true);
                setShowSuccess(true);
                setForm({ name: '', email: '', message: '' });
                setAgreed(false);
            } catch (error: any) {
                setErrorMessage(error.message || 'Fehler beim Senden');
                setShowError(true);
            }
        }
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const validateName = (name: string) => {
        const nameRegex = /^[A-Za-zÄäÖöÜüß'\- ]{2,}$/;
        return nameRegex.test(name)
    }

    return (
        <>
            <ToastContainer position="top-end" className="p-3">
                <OwnToast
                    autohide={!isTestEnvironment}
                    delay={3000}
                    show={showSuccess}
                    onClose={handleCloseSuccess}
                    headerTitle="Erfolgreich!"
                    bodyMessage="Ihr Nachricht wurde erfolgreich verschickt."
                    headerProps={{ className: 'bg-success text-white', style: { fontSize: '1.2em' } }}
                    role="alert"
                    data-testid="success-toast"
                />
                <OwnToast
                    autohide
                    delay={3000}
                    show={showError}
                    onClose={handleCloseError}
                    headerTitle="Fehler!"
                    bodyMessage={errorMessage}
                    headerProps={{ className: 'bg-warning text-white', style: { fontSize: '1.2em' } }}
                    role="alert"
                    data-testid="error-toast"
                />
            </ToastContainer>


            <div className='contact-form'>
                <Card style={{ width: 'fit-content', minWidth: '500px' }}>
                    <form ref={formRef} onSubmit={onSubmitChange}>
                        <FormField
                            id="name"
                            label="Name:"
                            placeholder="Max Mustermann"
                            required={true}
                            type="text"
                            value={form.name}
                            onChange={onInputChange}
                            autoComplete="name"
                        />
                        <FormField
                            id="email"
                            label="Mail:"
                            placeholder="mail@info.com"
                            required={true}
                            type="email"
                            value={form.email}
                            onChange={onInputChange}
                            autoComplete="mail"
                        />

                        <div className='text-field'>
                            <Label htmlFor="message">Message:</Label>
                            <textarea
                                className={inputStyles.input}
                                value={form.message}
                                name="message"
                                id="message"
                                rows={5}
                                cols={40}
                                placeholder="Nachricht ..."
                                onChange={onInputChange}
                                autoComplete='off'
                            />
                        </div>

                        <div className='checkbox'>
                            <input
                                type="checkbox"
                                id="privacyCheck"
                                checked={agreed}
                                onChange={onCheckboxChange}
                            />
                            <Label htmlFor='privacyCheck' style={{ marginBottom: '0' }}>Bitte bestätigen sie vor dem Absenden die <a href="#">Datenschutzrichtlinie</a></Label>
                        </div>
                        <Button disabled={disabled} type="submit" style={{ marginTop: '16px' }}>Send</Button>
                    </form>
                </Card>
            </div >
        </>
    )
}