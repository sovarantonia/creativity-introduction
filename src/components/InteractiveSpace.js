import React, {useState, useEffect} from 'react';
import DrawingSpace from "./DrawingSpace";

const InteractiveSpace = () => {
    // List of creative ideas
    const ideas = [
        "Start a blog about your favorite hobby.",
        "Create a unique painting inspired by your emotions today.",
        "Design a new board game with your friends.",
        "Write a short story where the characters are based on your pets.",
        "Come up with a new way to recycle household items.",
        "Develop a mobile app to help organize your daily routine.",
        "Create a playlist based on the colors of the rainbow.",
        "Invent a new type of dance that represents an emotion.",
        "Build a time capsule of your current favorite things.",
        "Write a letter to your future self about your dreams and goals.",
    ];

    const [randomIdea, setRandomIdea] = useState('');

    // Function to generate a random idea from the list
    const generateIdea = () => {
        const randomIndex = Math.floor(Math.random() * ideas.length);
        setRandomIdea(ideas[randomIndex]);
    };

    // Ensure body doesn't overflow with scrollbars
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable page scrolling
        return () => document.body.style.overflow = 'auto'; // Re-enable scrolling when the component unmounts
    }, []);



    return (
        <div style={{padding: '20px', fontFamily: '"Poppins", serif', position: 'relative', height: '100vh'}}>
            <h2 style={{fontSize: '22px', color: '#FB6B6B'}}>Generate New Creative Ideas <button
                onClick={generateIdea}
                style={{
                    backgroundColor: '#eca871',
                    color: '#F5EFE7',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    marginTop: '20px',
                    marginBottom: '20px',
                    fontFamily: '"Poppins", serif',
                }}
            >
                Generate Idea
            </button></h2>


            {randomIdea && (
                <div style={{marginTop: '20px', fontSize: '18px', fontStyle: 'italic'}}>
                    <p>"{randomIdea}"</p>
                </div>
            )}

            <DrawingSpace/>
        </div>
    );
};

export default InteractiveSpace;
