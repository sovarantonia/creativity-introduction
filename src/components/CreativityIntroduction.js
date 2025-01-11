import React from "react";
import "../resources/CreativityIntroduction.css";

const CreativityIntroduction = () => {
    const content = [
        {
            textToDisplay:
                "The use of imagination or original ideas to create something",
        },
        {
            textToDisplay:
                "“Creativity is Intelligence Having Fun.” Albert Einstein",
        },
        {
            textToDisplay: "Your personal touch in the world",
        },
        {
            textToDisplay: "Sugar, spice and everything nice",
        },
    ];

    return (
        <div className="creativity-wrapper">
            <p className="intro-paragraph">
                It can be difficult to define creativity, some definitions being more abstract or rigid.
                It is up to you how you want it to be defined, be <span className="highlight">CREATE-ive</span>.
            </p>
            <div className="creativity-container">
                {content.map((item, index) => (
                    <div key={index} className="creativity-card">
                        <p className="creativity-text">{item.textToDisplay}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreativityIntroduction;
