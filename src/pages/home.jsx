import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import getRecipeById from "../data";
import "../App.css"
import { useContext } from 'react';
import { Context } from '../context/Context';

const Home = () => {
    const context = useContext(Context);

    return (
        <div>
            <h1 style={{
                color: context.theme.color,
                fontSize: context.theme.fontSize
            }}>
                {context.applicationName}
            </h1>

            <h2>Current user: {context.user.username}</h2>

            <Carousel showArrows={true}>
                <div>
                    <img className="carousel-image" src={getRecipeById(1).image} alt="" />
                </div>
                <div>
                    <img className="carousel-image" src={getRecipeById(2).image} alt="" />
                </div>
                <div>
                    <img className="carousel-image" src={getRecipeById(3).image} alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Home 
