import { formatDistanceToNow } from 'date-fns';
import { de } from 'date-fns/locale';
import { Star, StarFill } from 'react-bootstrap-icons'
import { Card, Picture } from '../../atoms'
import './Reviews.modules.css'

type Review = {
    name: string;
    imgSrc: string;
    reviewDate: string;
    stars: number;
    reviewText: string;
}

type ReviewsProps = {
    reviews: Review[]
}

export function Reviews({ reviews }: ReviewsProps) {
    const dateResult = (date: string) => {
        return formatDistanceToNow(
            new Date(date), // Format: YYYY, MM, DD
            { locale: de }
        )
    }

    return (
        <>
            <section>
                <h2>Reviews</h2>
                <div className={'review-container'}>
                    {
                        reviews.map((review, index) => (
                            <Card key={index} className={'card-style'}>
                                <div className={'customer'}>
                                    <Picture
                                        srcBase={review.imgSrc}
                                        alt={`Bild von ${review.name}`}
                                        className={'picture-customer'}
                                        imageClassName={'image-customer'}
                                    />
                                    <div>
                                        <p className='mb-0'><strong>{review.name}</strong></p>
                                        <span>{dateResult(review.reviewDate)}</span>
                                    </div>

                                </div>
                                <div className={'stars'}>
                                    {
                                        Array.from({ length: review.stars }).map((_, i) => (
                                            <StarFill key={i} size={24} style={{ fill: 'gold' }} />
                                        ))
                                    }
                                    {
                                        Array.from({ length: 5 - review.stars }).map((_, i) => (
                                            <Star key={i} size={24} style={{ fill: 'gold' }} />
                                        ))
                                    }
                                </div>
                                <span>{review.reviewText}</span>
                            </Card>
                        ))
                    }
                </div>
            </section>
        </>
    )
}