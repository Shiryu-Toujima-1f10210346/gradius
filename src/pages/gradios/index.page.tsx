import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

const Home = () => {
  const [playerX, setPlayerX] = useState(0);
  const [playerY, setPlayerY] = useState(0);
  // useEffect(() => {}, []);
  const hoge = true;

  const keydown = async (direction: string) => {
    // console.log(e);
    // console.log(e.code);
    const playerPos = await apiClient.handler.$post({
      body: { x: playerX, y: playerY, key: direction },
    });
    setPlayerX(playerPos.x);
    setPlayerY(playerPos.y);
  };

  const click = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
  };

  if (!hoge) return <Loading visible />;

  return (
    <div className={styles.container}>
      <div className={styles.button} />
    </div>
  );
};

export default Home;
