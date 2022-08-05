import React, { useState, useEffect } from 'react';
import './index.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { ListItemSecondaryAction } from '@mui/material';
import { canUseLayoutEffect } from '@apollo/client/utilities';
import Carousel from '../Carousel';

function LikedMovies() {
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME);
    const user = data?.me || data?.user || {};

    console.log(user)

    const [currentWidth, setCurrentWidth] = useState(
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        //Looking at the width of the users view port
    )

    const [count, setCount] = useState(
        currentWidth > 800 ? 5 : 3
    )

    const [iterable, setIterable] = useState(
        new Array(Math.ceil(user.likedMovies.length / count))
    )


    const handleResize = () => {
        setCurrentWidth(window.innerWidth) 
      }
      useEffect(() => {
        window.addEventListener("resize", handleResize, false);
      }, []);
      //This is constantly looking for the width and setting it
      //After it is set, it will useEffect 


    useEffect(() => {
        if (currentWidth > 800) {
            //5 cards in carousel 
            setCount(5)
        } else if (currentWidth > 500) {
            //4 cards in carousel
            setCount(4)
        } else {
            //3 cards in carousel
            setCount(3)
        }
        setIterable(new Array(Math.ceil(user.likedMovies.length / count)).fill(0))
    }, [currentWidth])
    //Constantly looking at the width of the users view port
    //And adjusting the cards count in the carousel 

    console.log(count)
    console.log(currentWidth)
    console.log(iterable)
    console.log(user)
    return (

        <div className="likedWrapper">
            {iterable.map((element, i) => (
                (i === 0) &&
                    (<section id={`likedSection${i + 1}`} >
                        <a href={`#likedSection${iterable.length - 1}`}><ArrowBackIosIcon /></a>
                        {user?.likedMovies.map((item, j) => (
                            j < count &&
                            <Carousel key={uuidv4()} item={item} />
                        ))}
                        <a href={`#likedSection${i + 2}`}><ArrowForwardIosIcon /></a>
                    </section>)

                (i === (iterable.length - 1) && i !== 0) && 
                    (<section id={`likedSection${i + 1}`} >
                        <a href={`#likedSection${i}`}><ArrowBackIosIcon /></a>
                        {user?.likedMovies.map((item, j) => (
                            j < count &&
                            <Carousel key={uuidv4()} item={item} />
                        ))}
                        <a href={`#likedSection1`}><ArrowForwardIosIcon /></a>
                    </section>)

                (i !== (iterable.length - 1) && i !== 0) &&
                    (<section id={`likedSection${i + 1}`} >
                        <a href={`#likedSection${i}`}><ArrowBackIosIcon /></a>
                        {user?.likedMovies.map((item, j) => (
                            j < count &&
                            <Carousel key={uuidv4()} item={item} />
                        ))}
                        <a href={`#likedSection${i + 2}`}><ArrowForwardIosIcon /></a>
                    </section>)
            ))}
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