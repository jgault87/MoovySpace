import React from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import './index.scss'

function FavoriteMovies(props) {
    const { favoriteMovies } = props;
    return (
        
            <section className="projectSection" id="projects">
                <div className="posterContainer">
                    <input type="radio" name="slider" id="item1" defaultChecked></input>
                    <input type="radio" name="slider" id="item2" defaultChecked></input>
                    <input type="radio" name="slider" id="item3" defaultChecked></input>
                    <div className="cards">
                        <label className="card" htmlFor="item1" id="project1">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${favoriteMovies[0].image}`} alt={favoriteMovies[0].title}></img>
                        </label>
                        <label className="card" htmlFor="item2" id="project2">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${favoriteMovies[1].image}`} alt={favoriteMovies[1].title}></img>
                        </label>
                        <label className="card" htmlFor="item3" id="project3">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${favoriteMovies[2].image}`} alt={favoriteMovies[2].title}></img>
                        </label>
                    </div>
                    <div className="infoContainer" id="infoContainer">
                        <div className="upperpart">
                            <div className="infoarea" id="test">
                                <label className="projectinfo" id="projectinfo1">
                                    <div className="title">
                                    {favoriteMovies[0].title}
                                    </div>
                                    <div className="subline">
                                        <div className="liveLink"><a href="https://fierce-castle-22192.herokuapp.com/"
                                            target="_blank" rel="noreferrer">Live Link Here</a></div>
                                        <a className="cameraIcon" href="https://github.com/Noah8863/PWA-Text-Editor" target="_blank" rel="noreferrer"><VideocamIcon /></a>
                                    </div>
                                </label>
                                <label className="projectinfo" id="projectinfo2">
                                    <div className="title">
                                    {favoriteMovies[1].title}
                                    </div>
                                    <div className="subline">
                                        <div className="liveLink"><a href="https://noah8863.github.io/Coffee-and-Book-Finder/"
                                            target="_blank" rel="noreferrer">Live Link Here</a></div>
                                        <a className="cameraIcon" href="https://github.com/Noah8863/PWA-Text-Editor" target="_blank" rel="noreferrer"><VideocamIcon /></a>
                                    </div>
                                </label>
                                <label className="projectinfo" id="projectinfo3">
                                    <div className="title">
                                        {favoriteMovies[2].title}
                                    </div>
                                    <div className="subline">
                                        <div className="liveLink"><a href="https://noah8863.github.io/Password-Generator/"
                                            target="_blank" rel="noreferrer">Live Link Here</a></div>
                                        <a className="cameraIcon" href="https://github.com/Noah8863/PWA-Text-Editor" target="_blank" rel="noreferrer"><VideocamIcon /></a>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default FavoriteMovies;