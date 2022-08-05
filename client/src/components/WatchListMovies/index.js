import React from 'react';
import './index.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function WatchListMovies(props) {
	const { savedMovies } = props;
	return (
		<div className="wrapper">
			<section id="watchSection1">
				<a href="#watchSection2">
					<ArrowBackIosIcon />
				</a>

				<div className="item">
					<img src={`https://image.tmdb.org/t/p/w500${savedMovies[0].image}`} alt="Describe Image" />
				</div>
				{/* <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[1].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[2].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[0].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[1].image}`} alt="Describe Image" />
                </div> */}
				<a href="#watchSection2">
					<ArrowForwardIosIcon />
				</a>
			</section>

			{/* <section id="watchSection2">
                <a href="#watchSection1"><ArrowBackIosIcon /></a>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[0].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[1].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[2].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[0].image}`} alt="Describe Image" />
                </div>
                <div className="item">
                    <img src={`https://image.tmdb.org/t/p/w500${savedMovies[1].image}`} alt="Describe Image" />
                </div>
                <a href="#watchSection1"><ArrowForwardIosIcon /></a>
            </section> */}
		</div>
	);
}

export default WatchListMovies;
