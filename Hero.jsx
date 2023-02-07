import React from "react";
import Avatar from "../assets/avatar.jpeg"


function Hero() {
    return (
        <div className="flex lg:flex-row flex-col max-w-5xl mx-auto">
            <div className="p-5">
            <img src={Avatar} alt="Avatar"
                className="max-w-xs hover:shadow-2xl"
                />
                </div>
            <div className="p-5">
                <h1
                    className="text-3xl font-bold italic"
                >
                    Hi I am Harsh !!!
                </h1>
                <p className="max-w-lg">
                    Computer Science Engineering Student currently in his 3rd year with a major in Data Science.
                <br/> Skilled in Java and cpp. Got good communication skills. Also a good cook...
                </p>
            </div>
        </div>
    )
}

export default Hero;
