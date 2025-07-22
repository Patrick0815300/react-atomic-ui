import React from 'react';
import { useState } from 'react'
import { FormField } from '../../moleculess'
import { Button, Label, Card, OwnToast } from '../../atoms'
import { ToastContainer } from 'react-bootstrap'
import inputStyles from '../../atoms/Input/Input.module.css'
import './ContactForm.modules.css'


export function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        mail: '',
        message: ''
    })

    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false)
    const handleClose = () => setShowSuccess(false);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const stateProp = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [stateProp]: value })
    }

    const onSubmitChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateEmail(form.mail) && validateName(form.name)) {
            // Übergabe von "form" an das Backend
            setForm({
                name: '',
                mail: '',
                message: ''
            })
            setShowSuccess(true)
        } else { setShowError(true) }
        console.log(isTestEnvironment);

    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const validateName = (name: string) => {
        const nameRegex = /^[A-Za-zÄäÖöÜüß'\- ]{2,}$/;
        return nameRegex.test(name)
    }

    const isTestEnvironment = () => process.env.NODE_ENV === 'test';


    return (
        <>
            <ToastContainer position="top-end" className="p-3">
                <OwnToast
                    autohide
                    delay={3000}
                    show={showSuccess}
                    onClose={handleClose}
                    headerTitle="Erfolgreich!"
                    bodyMessage="Ihr Nachricht wurde erfolgreich verschickt"
                    headerProps={{ className: 'bg-success text-white', style: { fontSize: '1.2em' } }}
                    role="alert"
                    data-testid="success-toast"
                />
                <OwnToast
                    autohide
                    delay={3000}
                    show={showError}
                    onClose={handleClose}
                    headerTitle="Error!"
                    bodyMessage="Fehler beim Senden der Nachricht"
                    headerProps={{ className: 'bg-warning text-white', style: { fontSize: '1.2em' } }}
                    role="alert"
                    data-testid="error-toast"
                />
            </ToastContainer>


            <div className='contact-form'>
                <Card style={{ width: 'fit-content', minWidth: '500px' }}>
                    <form onSubmit={onSubmitChange}>
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
                            id="mail"
                            label="Mail:"
                            placeholder="mail@info.com"
                            required={true}
                            type="email"
                            value={form.mail}
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
                        <Button type="submit" style={{ marginTop: '16px' }}>Send</Button>
                    </form>
                </Card>
            </div >
        </>
    )
}