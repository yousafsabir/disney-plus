import React from "react";
import RecommendedWrap from "./RecommendedWrap";
import { getRecommended } from "../redux/slices/MovieSlice";
import { useSelector } from "react-redux/es/exports";
import A from "../assets/images/viewers-marvel.png";

const Recommended = () => {
    // const recommended = useSelector(getRecommended());
    const recommended = useSelector((state) => getRecommended(state));
    console.log(recommended);
    return (
        <div className="py-8">
            <h4 className="mb-5 text-2xl">Recommended For You</h4>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {recommended.map((item, i) => {
                    return (
                        <div key={i}>
                            <RecommendedWrap img={item.cardImg} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Recommended;
