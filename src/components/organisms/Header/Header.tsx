import SearchBar from "../../moleculess/SearchBar/SearchBar";
import './Header.module.css'

export function Header() {
    const links = [
        {
            href: '/',
            title: 'Home'
        },
        {
            href: 'Service',
            title: 'Dienstleistungen'
        }, {
            href: 'aboutus',
            title: 'Über uns'
        },
    ]

    const currentPath = '/aboutus'; // setzen des aktiven paths mit router
    return (
        <>
            <header>
                <a href="/"><div className={styles.logo}>Logo</div></a>
                <div className={styles.links}>
                    {
                        links.map((l, i) => {
                            return <a
                                key={i}
                                href={l.href}
                                aria-current={currentPath === l.href ? 'page' : undefined}
                                aria-label="Link Navigation"
                            >
                                {l.title}</a>
                        })
                    }
                </div>
                <SearchBar
                    id="1"
                    name="headerInput"
                    placeholder=""
                    buttonLabel="Suchen"
                    inputClassName={styles.headerInput}
                />
            </header>
        </>
    )
}