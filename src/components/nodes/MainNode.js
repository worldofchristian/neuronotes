import React from 'react'

const MainNode = ({ data }) => {
  return (
    <>
    <div
    style={{
        background: 'lightblue',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px darkgray',
    }}>
        {data.label}
    </div>
    </>
  );
};

export default MainNode