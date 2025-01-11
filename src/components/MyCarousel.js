import React, { useRef } from 'react';
import { Carousel } from 'antd';
import '../resources/MyCarousel.css';

const MyCarousel = ({content }) => {
    const carouselRef = useRef(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev(); // Move to the previous slide
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(); // Move to the next slide
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <Carousel
                ref={carouselRef}
                style={{ background: "transparent" }}
                dotPosition={"bottom"}
                dots={{ className: 'custom-dots' }}
            >
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px',
                            gap: '20px',
                        }}
                    >
                        {/* Render the textTitle only if it is not an empty string */}
                        {item.textTitle && item.textTitle.trim() !== '' && (
                            <p
                                style={{
                                    color: '#FB6B6B',
                                    fontSize: '28px',
                                    fontWeight: 'bold',
                                    fontFamily: '"Poppins", serif',
                                    margin: '10px 0',
                                    width: '100%',
                                    borderRadius: '8px',
                                }}
                            >
                                {item.textTitle}
                            </p>
                        )}

                        <p
                            style={{
                                color: '#171717',
                                fontSize: '25px',
                                fontFamily: '"Poppins", serif',
                                margin: '10px',
                                width: '80%',
                                borderRadius: '8px',
                                lineHeight: '1.6',
                            }}
                        >
                            {item.textToDisplay}
                        </p>

                        {item.imageSrc ? (
                            item.imageSrc.includes('/') ? (
                                <img
                                    src={item.imageSrc}
                                    alt=""
                                    style={{
                                        maxWidth: '45%',
                                        height: 'auto',
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        margin: '10px',
                                    }}
                                />
                            ) : (
                                <p
                                    style={{
                                        fontSize: '16px',
                                        color: '#171717',
                                        margin: '10px',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        backgroundColor: '#F5EFE7',
                                        textAlign: 'center',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        fontFamily: '"Poppins", serif',
                                    }}
                                >
                                    {item.imageSrc}
                                </p>
                            )
                        ) : null}
                    </div>
                ))}

            </Carousel>

            {/* Arrows */}
            <div className="arrows-container">
                <div className="arrow left-arrow" onClick={handlePrev}>
                    &#8249; {/* Left arrow symbol */}
                </div>
                <div className="arrow right-arrow" onClick={handleNext}>
                    &#8250; {/* Right arrow symbol */}
                </div>
            </div>
        </div>
    );
};

export default MyCarousel;
