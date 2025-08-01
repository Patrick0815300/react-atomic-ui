import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel.module.css'

export function OwnCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    return (
        <>
            <section>
                <Carousel responsive={responsive}>
                    <img src="src/assets/images/hero/hero_background.avif" alt="" />
                    <img src="src/assets/images/hero/hero_background.avif" alt="" />
                    <img src="src/assets/images/hero/hero_background.avif" alt="" />
                    <img src="src/assets/images/hero/hero_background.avif" alt="" />
                    {/* ... weitere Bilder */}
                </Carousel>
            </section>

        </>
    )
}