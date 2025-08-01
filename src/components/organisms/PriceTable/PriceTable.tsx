
import { CheckLg } from 'react-bootstrap-icons'
import { Button, Card } from '../../atoms'
import './PriceTable.modules.css'

type Service = {
    serviceType: string,
    price: number,
    description: string,
    features: string[]
}

type ServicesProp = {
    services: Service[]
}

export function PriceTable({ services }: ServicesProp) {

    return (
        <>
            <section>
                <div className={'head'}>
                    <h1>Transparente Preise für alle</h1>
                    <span>bei uns finden sie akutelle faire Preise. Bei hjedem Service sind Preis und die behinhaltet Service aufgelistet.</span>
                </div>
                <div className='d-flex flex-wrap gap-4 justify-content-center'>
                    {
                        services.map((service, index) => (
                            <Card key={index} className={'card'}>
                                <span><strong>{service.serviceType}</strong></span>
                                <span>{service.price}€</span>
                                <span>{service.description}</span>
                                <div className={'features'}>
                                    {
                                        service.features.map((feature, i) => (
                                            <span key={i}><CheckLg color='green' /> {feature}</span>
                                        ))
                                    }
                                </div>
                                <Button>Select</Button>
                            </Card>
                        ))
                    }

                </div>
            </section >
        </>
    )
}