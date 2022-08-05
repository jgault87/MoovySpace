import React, { useState } from 'react';

function Carousel(props) {
    const {item} = props
    return (
        <div className="item">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${item.image}`} alt="Movie Poster" />
                <div className="likedDescriptions">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button className="btn">Click me</button>
                </div>
            </div>
        </div>
    )
}
export default Carousel;