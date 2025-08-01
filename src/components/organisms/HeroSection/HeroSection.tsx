import './HeroSection.modules.css'

export function HeroSection() {
    return (
        <section>
            <div className={'image-container'}>
                {/* <picture>
                    <source srcSet="src/assets/images/hero/hero_background.avif" type="image/avif" />
                    <source srcSet="src/assets/images/hero/hero_background.webp" type="image/webp" />
                    <img
                        src="src/assets/images/hero/hero_background.jpg"
                        alt="Dein Hero Text"
                        className={styles.heroImage}
                        fetchPriority="high"
                    />
                </picture> */}
                <h1 className={'text-container'}>
                    <span>Hier könnte dein Werbung stehen</span>
                </h1>
                <div style={{ width: '40vw' }}></div>
            </div>

        </section>
    );
}
