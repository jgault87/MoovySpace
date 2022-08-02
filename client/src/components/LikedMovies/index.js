import React from 'react';
import './index.scss';

function LikedMovies() {
    return (
        <div class="wrapper">
            <section id="section1">
                <a href="#section3">‹</a>
                <div class="item">
                    <img src="img1.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img2.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img3.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img4.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img5.jpg" alt="Describe Image" />
                </div>
                <a href="#section3">›</a>
            </section>
            <section id="section2">
                <a href="#section1">‹</a>
                <div class="item">
                    <img src="img6.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img7.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img8.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img9.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img10.jpg" alt="Describe Image" />
                </div>
                <a href="#section3">›</a>
            </section>

            <section id="section3">
                <a href="#section2">‹</a>
                <div class="item">
                    <img src="img11.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img12.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img13.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img14.jpg" alt="Describe Image" />
                </div>
                <div class="item">
                    <img src="img15.jpg" alt="Describe Image" />
                </div>
                <a href="#section1">›</a>
            </section>
        </div>
    )
}

export default LikedMovies