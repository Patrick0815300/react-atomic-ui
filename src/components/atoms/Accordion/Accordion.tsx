import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

type AccordionItem = {
    headerTitle?: string;
    bodyText?: string;
    itemProps?: {};
    headerProps?: {};
    bodyProps?: {};
}

type AccordionMoleculeProps = {
    array: AccordionItem[];
};


const SingleItem = ({ eventKey, headerTitle, bodyText, itemProps, headerProps, bodyProps }: AccordionItem & { eventKey: string }) => (
    <Accordion.Item eventKey={eventKey} {...itemProps}>
        <Accordion.Header {...headerProps}>{headerTitle}</Accordion.Header>
        <Accordion.Body {...bodyProps}>
            {bodyText}
        </Accordion.Body>
    </Accordion.Item>
);

const AccordionMolecule = ({ array }: AccordionMoleculeProps) => (
    <Accordion>
        {array.map((item, index) => (
            <SingleItem
                key={index}
                eventKey={index.toString()}
                {...item}
            />
        ))}
    </Accordion>
);


export default AccordionMolecule