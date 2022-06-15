import React from "react";

const RecommendedWrap = (props) => {
    return (
        <div className="cursor-pointer overflow-hidden rounded-xl border-[3px] border-viewer-border  shadow-viewer transition-all duration-200 ease-viewer hover:scale-105 hover:border-recommended hover:shadow-viewer">
            <img src={props.img} className="h-full w-full" alt="" />
        </div>
    );
};

export default RecommendedWrap;
