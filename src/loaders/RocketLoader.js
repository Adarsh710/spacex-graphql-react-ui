import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lottie-loaders/Lottie-animation-rocket-in-space.json';

function RocketLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="rocket-loader">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default RocketLoader;
