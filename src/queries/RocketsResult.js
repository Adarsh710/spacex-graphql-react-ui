import React from 'react'

export default function RocketsResult(props) {
  const { value, index } = props;

  return (
    <>
      {value === index && (<div className="rockets-container">
        Coming Soon...
      </div>)}
    </>
  );
}