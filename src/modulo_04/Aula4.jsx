import React, { useState } from 'react';
import styled from 'styled-components';
import { Topico2 } from './parte-2/Topico2'

const ClassRoom = styled.div`
	display: flex;
	flex-direction: column;
`;

const ClassRoomControls = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 10px 0;
`;

const ClassRoomBoard = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;

const Aula4 = () => {
  const [topic, setTopic] = useState(2);

  return (
    <ClassRoom>
      <ClassRoomControls>
        <button onClick={() => setTopic(2)}>Tópico 2</button>
      </ClassRoomControls>
      <ClassRoomBoard>
        {topic === 2 && <Topico2 />}
      </ClassRoomBoard>
    </ClassRoom>
  );
}

export default Aula4;

/*
	Curso de Desenvolvimento de aplicações para internet com ReactJS.
	Noções dos Conceitos aplicados a qualidade de código e automação de testes em React:
	Noções de Tratamento de erros.
*/
