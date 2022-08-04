import React from 'react';
import './index.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ListItemSecondaryAction } from '@mui/material';

function LikedMovies(props) {
    const { likedMovies} = props;
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME);
    const user = data?.me || data?.user || {};
    const items = user.likedMovies
    console.log(user)

    return (
        <div className="likedWrapper">
            <section id="likedSection1">
                <a href="#likedSection2"><ArrowBackIosIcon /></a>

                <div className="item">
                    {user.likedMovies.map((movie) => {
                        <div key={movie._id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.image}`} alt="Movie Poster" />
                            <div className="likedDescriptions">
                                <h1>{movie.title}</h1>
                                <p>{movie.description}</p>
                            </div>
                            </div>
                    })}
                </div>

                <div className="item">
                    {items.map((item) => (
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${item.image}`} alt="Movie Poster" />
                            <div className="likedDescriptions">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
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

            {/* <section id="likedSection2">
                <a href="#likedSection1"><ArrowBackIosIcon /></a>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${likedMovies[0].image}`} alt="Describe Image" />
                    <div className="likedDescriptions">
                        <h1>{likedMovies[0].title}</h1>
                        <p>{likedMovies[0].description}</p>
                    </div>
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
            </section> */}
        </div>
    )
}

export default LikedMovies