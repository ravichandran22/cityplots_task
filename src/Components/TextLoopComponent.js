import React from 'react';
import TextLoop from 'react-text-loop';

const TextLoopComponent = () => {
  return (
    <div className="text-loop flot position-relative" style={bgColor}>
      <div className="marquee">
        <TextLoop>
          <span>High Value High Returns</span>
          <span>High Returns Guaranteed</span>
          <span>Invest in Your Future</span>
        </TextLoop>
      </div>
    </div>
  );
};

export default TextLoopComponent;

const bgColor = {
  backgroundColor: '#F5F5F5',
  marginBottom: '0px !important',
}
