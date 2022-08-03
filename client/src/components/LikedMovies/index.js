import React from 'react';
import './index.scss';
import { HashLink } from 'react-router-hash-link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import img1 from '../../testMoviePosters/test1.jpg';
import img2 from '../../testMoviePosters/test2.jpg';
import img3 from '../../testMoviePosters/test3.jpg';
import img4 from '../../testMoviePosters/test4.jpg';
import img5 from '../../testMoviePosters/test5.jpg';
import img6 from '../../testMoviePosters/test6.jpg';
import img7 from '../../testMoviePosters/test7.jpg';
import img8 from '../../testMoviePosters/test8.jpg';
import img9 from '../../testMoviePosters/test9.jpg';
import img10 from '../../testMoviePosters/test10.jpg';

function LikedMovies() {

    return (
        <div className="wrapper">
            <section id="section1">
                <a href="#section2"><ArrowBackIosIcon /></a>
                
                <div className="item">
                    <img src={img1} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img2} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img3} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img4} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img5} alt="Describe Image" />
                </div>
                <a href="#section2"><ArrowForwardIosIcon /></a>
            </section>
            
            <section id="section2">
                <a href="#section1"><ArrowBackIosIcon /></a>
                <div className="item">
                    <img src={img6} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img7} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img8} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img9} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={img10} alt="Describe Image" />
                </div>
                <a href="#section1"><ArrowForwardIosIcon /></a>
            </section>
        </div>
    )
}

export default LikedMovies