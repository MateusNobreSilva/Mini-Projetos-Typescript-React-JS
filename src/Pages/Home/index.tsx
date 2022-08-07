import React, { useEffect, useState } from 'react';

import Drawer from '../../Components/Drawer';

import { Container } from './styled';

function Home() {
  const [reliquias, setReliquias] = useState<any>();

  useEffect(() => {
    console.log('hello world');
    pegaDados();
  }, []);

  const pegaDados = async () => {
    console.log('olá projetos');
  };

  return (
    <>
      <Drawer>
        <Container>
          <p>projetis</p>
        </Container>
      </Drawer>
    </>
  );
}

export default Home;
