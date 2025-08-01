import React from 'react';
import './Picture.modules.css'

type PictureProps = {
    srcBase: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    fetchPriority?: 'high' | 'low' | 'auto';
};

const Picture = ({
    srcBase,
    alt,
    className = '',
    imageClassName = '',
    fetchPriority = 'auto',
}: PictureProps) => {
    return (
        <picture className={className}>
            <source srcSet={`${srcBase}.avif`} type="image/avif" />
            <source srcSet={`${srcBase}.webp`} type="image/webp" />
            <img
                src={`${srcBase}.jpg`}
                alt={alt}
                className={imageClassName}
                fetchPriority={fetchPriority}
                loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
            />
        </picture>
    );
};

export default Picture
