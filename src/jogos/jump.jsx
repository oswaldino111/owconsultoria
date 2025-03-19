import React, { useState, useEffect } from 'react';



const Jump = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 100 }); // Posição inicial do jogador
  const [platforms, setPlatforms] = useState([
    { x: 50, y: 500 },
    { x: 150, y: 400 },
    { x: 100, y: 300 },
  ]); // Plataformas iniciais
  const [jump, setJump] = useState(false);

  // Lógica de pulo
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setPlayerPosition((prev) => ({ ...prev, x: prev.x - 10 }));
      } else if (e.key === 'ArrowRight') {
        setPlayerPosition((prev) => ({ ...prev, x: prev.x + 10 }));
      } else if (e.key === ' ') { // Tecla de espaço para pular
        setJump(true);
        setTimeout(() => setJump(false), 500); // Simula a duração do pulo
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Simulação de gravidade e colisão
  useEffect(() => {
    const gravity = setInterval(() => {
      setPlayerPosition((prev) => {
        let newY = prev.y + 5; // Gravidade puxando para baixo
        platforms.forEach((platform) => {
          if (
            prev.x + 20 > platform.x &&
            prev.x < platform.x + 50 &&
            newY + 20 >= platform.y &&
            newY + 20 <= platform.y + 10 &&
            !jump
          ) {
            newY = platform.y - 20; // Colisão com a plataforma
          }
        });
        return { ...prev, y: newY };
      });
    }, 20);

    return () => clearInterval(gravity);
  }, [jump, platforms]);

  return (
    <div className="game-container">
      <div
        className="player"
        style={{
          left: `${playerPosition.x}px`,
          top: `${playerPosition.y}px`,
          position: 'absolute',
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
        }}
      />
      {platforms.map((platform, index) => (
        <div
          key={index}
          className="platform"
          style={{
            left: `${platform.x}px`,
            top: `${platform.y}px`,
            position: 'absolute',
            width: '50px',
            height: '10px',
            backgroundColor: 'green',
          }}
        />
      ))}
    </div>
  );
};

export default Jump;