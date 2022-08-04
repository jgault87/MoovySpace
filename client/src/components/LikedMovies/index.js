import React from 'react';
import './index.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { ListItemSecondaryAction } from '@mui/material';

function LikedMovies(props) {
    const { likedMovies } = props;
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME);
    const user = data?.me || data?.user || {};
    const items = user.likedMovies
    console.log(user)

    return (
        <div className="likedWrapper likedMovies-container">
            <section id="likedSection1">
                <a href="#likedSection2"><ArrowBackIosIcon /></a>
                {user.likedMovies.map((item, i) => (
                    i < 3 &&
                    <div className="item" key={uuidv4()}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${item.image}`} alt="Movie Poster" />
                            <div className="likedDescriptions">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <a href="#likedSection2"><ArrowForwardIosIcon /></a>
            </section>

            <section id="likedSection2">
                <a href="#likedSection1"><ArrowBackIosIcon /></a>
                {user.likedMovies.map((item, i) => (
                    i > 2 &&
                    <div className="item" key={uuidv4()}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${item.image}`} alt="Movie Poster" />
                            <div className="likedDescriptions">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <a href="#likedSection1"><ArrowForwardIosIcon /></a>
            </section>
        </div>
    )
}

export default LikedMovies



{/* <section id="likedSection2">
                <a href="#likedSection1"><ArrowBackIosIcon /></a>
                {user.likedMovies.map((item) => (
                    <div className="item" key={uuidv4()}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${item.image}`} alt="Movie Poster" />
                            <div className="likedDescriptions">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <a href="#likedSection1"><ArrowForwardIosIcon /></a>
            </section> */}