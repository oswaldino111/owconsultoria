// Minesweeper.js
import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography, Container } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';

// Configurações iniciais
const GRID_SIZE = 10;
const BOMB_COUNT = 15;

const Minesweeper = () => {
  // Estados do jogo
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [flagMode, setFlagMode] = useState(false);

  // Inicializar o tabuleiro
  const initializeBoard = () => {
    // Criar tabuleiro vazio
    const newBoard = Array(GRID_SIZE).fill().map(() =>
      Array(GRID_SIZE).fill().map(() => ({
        isBomb: false,
        isRevealed: false,
        isFlagged: false,
        neighborBombs: 0
      }))
    );

    // Adicionar bombas
    let bombsPlaced = 0;
    while (bombsPlaced < BOMB_COUNT) {
      const x = Math.floor(Math.random() * GRID_SIZE);
      const y = Math.floor(Math.random() * GRID_SIZE);
      if (!newBoard[x][y].isBomb) {
        newBoard[x][y].isBomb = true;
        bombsPlaced++;
      }
    }

    // Calcular números de bombas vizinhas
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (!newBoard[i][j].isBomb) {
          let count = 0;
          for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
              const ni = i + di;
              const nj = j + dj;
              if (ni >= 0 && ni < GRID_SIZE && nj >= 0 && nj < GRID_SIZE && newBoard[ni][nj].isBomb) {
                count++;
              }
            }
          }
          newBoard[i][j].neighborBombs = count;
        }
      }
    }

    setBoard(newBoard);
  };

  // Revelar célula
  const revealCell = (x, y) => {
    if (gameOver || board[x][y].isRevealed || board[x][y].isFlagged) return;

    const newBoard = [...board];
    newBoard[x][y].isRevealed = true;

    if (newBoard[x][y].isBomb) {
      setGameOver(true);
      // Revelar todas as bombas
      newBoard.forEach(row => row.forEach(cell => {
        if (cell.isBomb) cell.isRevealed = true;
      }));
    } else if (newBoard[x][y].neighborBombs === 0) {
      // Revelar células vizinhas se não houver bombas próximas
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          const ni = x + di;
          const nj = y + dj;
          if (ni >= 0 && ni < GRID_SIZE && nj >= 0 && nj < GRID_SIZE) {
            revealCell(ni, nj);
          }
        }
      }
    }

    setBoard(newBoard);
  };

  // Alternar bandeira
  const toggleFlag = (x, y) => {
    if (gameOver || board[x][y].isRevealed) return;

    const newBoard = [...board];
    newBoard[x][y].isFlagged = !newBoard[x][y].isFlagged;
    setBoard(newBoard);
  };

  // Handler de clique
  const handleCellClick = (x, y) => (e) => {
    if (flagMode || e.button === 2) {
      toggleFlag(x, y);
    } else {
      revealCell(x, y);
    }
  };

  // Reiniciar jogo
  const resetGame = () => {
    setGameOver(false);
    initializeBoard();
  };

  // Inicializar na primeira renderização
  useEffect(() => {
    initializeBoard();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Campo Minado
      </Typography>
      
      <Button
        variant="contained"
        onClick={() => setFlagMode(!flagMode)}
        sx={{ mb: 2, mr: 2 }}
      >
        {flagMode ? 'Modo Revelar' : 'Modo Bandeira'}
      </Button>
      
      <Button
        variant="contained"
        onClick={resetGame}
        sx={{ mb: 2 }}
      >
        Reiniciar
      </Button>

      <Grid container spacing={0} sx={{ width: 'fit-content' }}>
        {board.map((row, i) => (
          <Grid container item key={i}>
            {row.map((cell, j) => (
              <Grid item key={j}>
                <Button
                  variant="outlined"
                  sx={{
                    width: 40,
                    height: 40,
                    minWidth: 0,
                    p: 0,
                    borderRadius: 0,
                    backgroundColor: cell.isRevealed ? '#e0e0e0' : '#bdbdbd',
                    '&:hover': {
                      backgroundColor: cell.isRevealed ? '#e0e0e0' : '#9e9e9e'
                    }
                  }}
                  onClick={handleCellClick(i, j)}
                  onContextMenu={handleCellClick(i, j)}
                >
                  {cell.isFlagged ? (
                    <FlagIcon color="error" />
                  ) : cell.isRevealed ? (
                    cell.isBomb ? '💣' : 
                    (cell.neighborBombs > 0 ? cell.neighborBombs : '')
                  ) : ''}
                </Button>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>

      {gameOver && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Game Over!
        </Typography>
      )}
    </Container>
  );
};

export default Minesweeper;