import React from 'react';

const SpinLoader = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust height as needed
  };

  const loaderStyle = {
    width: '50px',
    aspectRatio: '1',
    display: 'grid',
    borderRadius: '50%',
    background: `
      linear-gradient(0deg ,rgb(0 0 0/50%) 30%,#0000 0 70%,rgb(0 0 0/100%) 0) 50%/8% 100%,
      linear-gradient(90deg,rgb(0 0 0/25%) 30%,#0000 0 70%,rgb(0 0 0/75% ) 0) 50%/100% 8%
    `,
    backgroundRepeat: 'no-repeat',
    animation: 'l23 1s infinite steps(12)',
  };

  const beforeAfterStyle = {
    content: '""',
    gridArea: '1/1',
    borderRadius: '50%',
    background: 'inherit',
    opacity: '0.915',
    transform: 'rotate(30deg)',
  };

  const afterStyle = {
    ...beforeAfterStyle,
    opacity: '0.83',
    transform: 'rotate(60deg)',
  };

  const keyframes = `
    @keyframes l23 {
      100% {transform: rotate(1turn)}
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <div style={loaderStyle}>
        <div style={beforeAfterStyle}></div>
        <div style={afterStyle}></div>
      </div>
    </div>
  );
};

export default SpinLoader;
