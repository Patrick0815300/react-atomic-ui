import React from 'react';
import { Button } from '../../atoms'
import AccordionMolecule from '../../atoms/Accordion/Accordion'
import { SearchBar } from '../../moleculess'
import { Hammer, PcDisplay, People } from 'react-bootstrap-icons'
import styles from './Faq.module.css'


export function Faq() {
    const buttonArray = [
        {
            icon: Hammer,
            text: 'Thema A',
        },
        {
            icon: PcDisplay,
            text: 'Thema B',
        },
        {
            icon: People,
            text: 'Thema C',
        },
    ]

    const itemArray = [
        {
            headerTitle: 'Das ist die 1',
            bodyText: 'Hier ist der Body 1'
        },
        {
            headerTitle: 'Das ist die 2',
            bodyText: 'Hier ist der Body 2'
        },
    ]

    return (
        <>
            <section>
                <h1>Häufig gestellte Fragen</h1>
                <div className={styles.questionContainer}>
                    <h3>Das sind die am häufig gestellten Fragen. Wenn du etwas nicht finden solltest <a href="#">kontaktiere</a> uns sehr gern persönlich</h3>
                    <div className="searchContainer">
                        <SearchBar id='search' name='searchFaq' />
                    </div>
                    <div className={styles.buttons}>
                        {
                            buttonArray.map((item, index) => (
                                <Button key={index} className={styles.faqButton}>
                                    {item.icon && <item.icon size={20} style={{ marginRight: 8 }} />}
                                    {item.text}
                                </Button>
                            ))
                        }

                    </div>
                    <div className={styles.accordionContainer}>
                        <AccordionMolecule array={itemArray} />
                    </div>
                </div>
            </section>
        </>
    )
}