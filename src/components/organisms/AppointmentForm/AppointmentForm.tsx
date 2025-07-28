import { useState } from "react";
import Select from "../../atoms/Select/Select";

export function AppointmentForm() {
    const [selected, setSelected] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };
    return (
        <>
            <h1>Appointment Form</h1>
            <input type="date" />

            <div>
                <Select
                    id="1"
                    name="test"
                    value="neu"
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </Select>
            </div>
        </>
    )
}