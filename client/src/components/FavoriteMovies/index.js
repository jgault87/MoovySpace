import React from 'react';
import project1 from '../../testMoviePosters/test1.jpg'
import project2 from '../../testMoviePosters/test2.jpg'
import project3 from '../../testMoviePosters/test3.jpg'
import Profile from "../../pages/Profile"
import './index.css'

function FavoriteMovies() {
    return (
        <main>
            <Profile />
            <section className="projectSection" id="projects">
                <div className="container">
                    <input type="radio" name="slider" id="item1" defaultChecked></input>
                    <input type="radio" name="slider" id="item2" defaultChecked></input>
                    <input type="radio" name="slider" id="item3" defaultChecked></input>
                    <div className="cards">
                        <label className="card" htmlFor="item1" id="project1">
                            <img
                                src={project1} alt={project1}></img>
                        </label>
                        <label className="card" htmlFor="item2" id="project2">
                            <img
                                src={project2} alt={project2}></img>
                        </label>
                        <label className="card" htmlFor="item3" id="project3">
                            <img
                                src={project3} alt={project3}></img>
                        </label>
                    </div>
                    <div className="infoContainer" id="infoContainer">
                        <div className="upperpart">
                            <div className="infoarea" id="test">
                                <label className="projectinfo" id="projectinfo1">
                                    <div className="title">PWA Text Editor</div>
                                    <div className="subline">
                                        <div className="liveLink"><a href="https://fierce-castle-22192.herokuapp.com/"
                                            target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    </div>
                                </label>
                                <label className="projectinfo" id="projectinfo2">
                                    <div className="title">Coffee and Book Finder</div>
                                    <div className="subline">
                                        <div className="liveLink"><a href="https://noah8863.github.io/Coffee-and-Book-Finder/"
                                            target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    </div>
                                </label>
                                <label className="projectinfo" id="projectinfo3">
                                    <div className="title">Password Generator</div>
                                    <div className="subline">
                                        <div className="liveLink"><a href="https://noah8863.github.io/Password-Generator/"
                                            target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FavoriteMovies;