import React from "react";
import Disney from "../assets/images/viewers-disney.png";
import Pixar from "../assets/images/viewers-pixar.png";
import Marvel from "../assets/images/viewers-marvel.png";
import StarWars from "../assets/images/viewers-starwars.png";
import National from "../assets/images/viewers-national.png";
import DisneyV from "../assets/videos/1564674844-disney.mp4";
import PixarV from "../assets/videos/1564676714-pixar.mp4";
import MarvelV from "../assets/videos/1564676115-marvel.mp4";
import StarWarsV from "../assets/videos/1608229455-star-wars.mp4";
import NationalV from "../assets/videos/1564676296-national-geographic.mp4";
import ViewerWrap from "./ViewerWrap";

const Viewers = () => {
    return (
        <div className="mt-8 grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {/* <div className="relative cursor-pointer overflow-hidden rounded-xl border-[3px] border-viewer-border  shadow-viewer-shadow transition-all duration-300 ease-viewer">
                <img
                    className="absolute top-0 z-10 transition-all duration-500  ease-in-out hover:opacity-0"
                    src={Disney}
                    alt=""
                />
                <video
                    src={DisneyV}
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    className="absolute top-0 aspect-video h-fit w-full"
                ></video>
            </div> */}
            <ViewerWrap img={Disney} video={DisneyV} />
            <ViewerWrap img={Pixar} video={PixarV} />
            <ViewerWrap img={Marvel} video={MarvelV} />
            <ViewerWrap img={StarWars} video={StarWarsV} />
            <ViewerWrap img={National} video={NationalV} />
        </div>
    );
};

export default Viewers;
