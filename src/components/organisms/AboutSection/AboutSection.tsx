import React from 'react';
import { Card, Picture } from '../../atoms'
import styles from './AboutSection.module.css'

type StoryProp = {
    title: string;
    text: string;
}

type MemberProb = {
    name: string;
    position: string;
    imageSrc: string;
}

type AboutSectionProps = {
    members: MemberProb[];
    storys: StoryProp[];
    headline: string | undefined
    subheadline: string | undefined
    imageHistory: string
    altImgHistory: string
}


export function AboutSection({ members, storys, imageHistory, altImgHistory, headline, subheadline }: AboutSectionProps) {

    return (
        <>
            <section>
                <div className={styles.header}>
                    <h1>{headline || 'Headline'}</h1>
                    <p>{subheadline || 'Subheadline'}</p>
                </div>
                <div className={styles.historyContainer}>
                    <Picture
                        srcBase={imageHistory}
                        alt={altImgHistory}
                        className={styles.historyPicture}
                        imageClassName={styles.heroImage}
                    />
                    <div className={styles.cardContainer}>
                        {
                            storys.map((story, index) => (
                                <Card key={index}>
                                    <h3>{story.title || 'Card-Title'}</h3>
                                    <span>{story.text || 'Card-Text'}</span>
                                </Card>
                            ))
                        }


                    </div>
                </div>
                <div className={styles.teamContainer}>
                    <Card>
                        <div className={styles.teamHeader}>
                            <h2>Erlebe unser Team</h2>
                            <span>Die  träger unseres Unternehmens</span>
                        </div>

                        <div className={styles.teamMembers}>
                            {
                                members.map((member, index) => (
                                    <div key={index} className={styles.member}>
                                        <Picture
                                            srcBase={member.imageSrc}
                                            alt={member.name}
                                            className={styles.teamImage}
                                            imageClassName={styles.memberImage}
                                        />
                                        <span><strong>{member.name}</strong></span>
                                        <span>{member.position}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </Card>

                </div>
            </section>

        </>
    )
}