import React from 'react';
import './artist-card.scss';

const ArtistCard = ({ artist }) => {
    const handleClick = () => console.log('card clicked');

    return (
        <div className="card" onClick={handleClick}>
            <div className="card__img-container">
                {artist.images.length > 0
                    ? <img className="card__img-container__img" src={artist.images[1].url} alt={`${artist.name}`} />
                    : <img src={`${process.env.PUBLIC_URL}/assets/not-found.jpg`} className="card__img-container__img" alt="not found" />}
            </div>
            <div className="card__title-container">
                <p className="card__title">{artist.name}</p>
            </div>
        </div>
    )
}

export default ArtistCard
