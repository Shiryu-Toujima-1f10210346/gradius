import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { apiClient } from 'src/utils/apiClient';

const Home = () => {
  const [playerX, setPlayerX] = useState(0);
  const [playerY, setPlayerY] = useState(0);
  const hoge = true;

  useEffect(() => {
    const fetchPos = async () => {
      const res = await apiClient.handler.$get();
      setPlayerX(res.x);
      setPlayerY(res.y);
      console.log('fetchPos');
    };

    const fetchShoot = async () => {
      const res = await apiClient.shoot.$get();
      console.log(res);
    };

    const interval = setInterval(() => {
      fetchPos();
    }, 100);

    const interval2 = setInterval(() => {
      fetchShoot();
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [playerX, playerY]);

  if (!hoge) return <Loading visible />;

  return (
    <>
      <div className="container">
        <div id="key">X:{playerX}</div>
        <div id="key">Y:{playerY}</div>
      </div>
      <div
        id="player"
        style={{
          position: 'absolute',
          left: `${playerX}px`,
          top: `${playerY}px`,
          backgroundColor: 'red',
          width: '25px',
          height: '25px',
        }}
      />
    </>
  );
};

export default Home;
