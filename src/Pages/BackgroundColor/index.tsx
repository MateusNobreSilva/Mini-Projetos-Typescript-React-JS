import React, { useEffect, useState } from 'react';

import Drawer from '../../Components/Drawer';
import Button from '../../Components/Button';
import { Container } from './styled';

function Home() {
  const [mudaCor, setMudaCor] = useState('');

  useEffect(() => {
    console.log('Hello background');
    setMudaCor('#FFFF00');
  }, []);

  const gg = () => {
    const vetorCores = [
      '#2F4F4F',
      '#FFD700',
      '#DDA0DD',
      '#8B4513',
      '#00FF00',
      '#000080',
      '#4F4F4F',
      '#FFF8DC',
      '#F5FFFA',
      '#FFFF00',
    ];

    const cor = Math.floor(Math.random() * vetorCores.length);
    console.log('cor: ', cor);
    setMudaCor(vetorCores[cor]);
  };

  return (
    <>
      <Drawer>
        <Container BGcolor={mudaCor}>
          <p>Trocar cor de Background</p>
          <Button onClick={gg} />
        </Container>
      </Drawer>
    </>
  );
}

export default Home;
