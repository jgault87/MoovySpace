import React from 'react';
import './index.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function LikedMovies(props) {
    const { likedMovies } = props;
    return (
        <div className="likedWrapper">
            <section id="likedSection1">
                <a href="#likedSection2"><ArrowBackIosIcon /></a>
                
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[0].image}`} alt="Describe Image" />
                    <div className="likedDescriptions">
                        <h1>{likedMovies[0].title}</h1>
                        <p>{likedMovies[0].description}</p>
                    </div>
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[1].image}`} alt="Describe Image" />
                    <div className="likedDescriptions">
                        <h1>{likedMovies[1].title}</h1>
                        <p>{likedMovies[1].description}</p>
                    </div>
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[2].image}`} alt="Describe Image" />
                    <div className="likedDescriptions">
                        <h1>{likedMovies[2].title}</h1>
                        <p>{likedMovies[2].description}</p>
                    </div>
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[0].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[1].image}`} alt="Describe Image" />
                </div>
                <a href="#likedSection2"><ArrowForwardIosIcon /></a>
            </section>
            
            <section id="likedSection2">
                <a href="#likedSection1"><ArrowBackIosIcon /></a>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[0].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[1].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[2].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[0].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[1].image}`} alt="Describe Image" />
                </div>
                <a href="#likedSection1"><ArrowForwardIosIcon /></a>
            </section>
        </div>
    )
}

export default LikedMovies