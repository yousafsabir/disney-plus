import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Viewers from "../../components/Viewers";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-full w-full bg-home-bg bg-cover bg-fixed bg-center bg-no-repeat px-5">
                <Header />
                <Viewers />
            </div>
        </div>
    );
};

export default Home;
