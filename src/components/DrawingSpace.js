import React, { useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const DrawingSpace = () => {
    const canvasRef = useRef(null);

    return (
        <div>
            <h2 style={{fontSize: '25px', color: '#FB6B6B'}}>Drawing space</h2>
            <ReactSketchCanvas
                ref={canvasRef}
                width="500px"
                height="300px"
                strokeColor="black"
                strokeWidth={5}
            />
            <button onClick={() => canvasRef.current.clearCanvas()} style={{
                backgroundColor: '#eca871',
                color: '#F5EFE7',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '20px',
                fontFamily: '"Poppins", serif'
            }}>Clear
            </button>
        </div>
    );
};

export default DrawingSpace;