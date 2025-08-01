import { useState } from "react";
import Select from "../../atoms/Select/Select"
import { Card } from "../../atoms";


export function AppointmentForm() {
    const options = [
        { value: '', label: '-- Bitte wählen --', disabled: true },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3', disabled: true }, // deaktivierte Option
    ];

    const [selected, setSelected] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };

    return (
        <>
            <Card>
                <form>
                    <label htmlFor="appointment-select">Termin auswählen:</label>
                    <Select
                        id="appointment-select"
                        name="appointment"
                        value={selected}
                        options={options}
                        onChange={handleChange}
                    />
                    <p>Ausgewählt: {selected || 'Keine Auswahl'}</p>
                </form>
            </Card>

        </>
    )
}