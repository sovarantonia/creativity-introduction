import { useState } from 'react';

const CardComponent = ({ cardsData }) => {
    const [visibleDetails, setVisibleDetails] = useState(Array(cardsData.length).fill(false));

    const toggleDetails = (index) => {
        const updatedVisibleDetails = [...visibleDetails];
        updatedVisibleDetails[index] = !updatedVisibleDetails[index];
        setVisibleDetails(updatedVisibleDetails);
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px', // Space between cards
                padding: '20px',
            }}
        >
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#F5EFE7',
                        overflow: 'hidden', // Prevent content overflow
                        position: 'relative',
                        height: '300px', // Set a fixed height for the card

                    }}
                >
                    <h3 style={{ fontFamily: "''Playwrite FR Moderne', serif", fontSize: '20px' }}>{card.title}</h3>
                    <button
                        onClick={() => toggleDetails(index)}
                        style={{
                            backgroundColor: '#eca871',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '10px 15px',
                            cursor: 'pointer',
                            marginTop: '10px',
                            fontSize: '16px',
                            fontFamily: '"Poppins", serif',
                        }}
                    >
                        {visibleDetails[index] ? 'Hide Details' : 'Details'}
                    </button>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '10px',
                            right: '10px',
                            maxHeight: visibleDetails[index] ? '100px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.3s ease',
                            backgroundColor: '#e6e4e0',
                            borderRadius: '4px',
                            padding: visibleDetails[index] ? '10px' : '0',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '17px',
                                lineHeight: '1.6',
                                color: '#333',
                                fontStyle: 'italic',
                                margin: '0',
                                fontFamily: '"Poppins", serif',
                            }}
                        >
                            {card.details}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
