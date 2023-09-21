import React from "react";
import ItemList from "./itemList";
import styled from 'styled-components';

const ListSection = styled.section`
    display: flex;
    flex-direction: column; 
    height: 170px; 
    overflow-y: auto;
    margin-bottom: 20px; 
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;  
`;

function DoneList({ dones, switchList, deleteItem }) {
  return (
    <Container>
      <h2>Done</h2>
      <ListSection>
        {dones.map((done, index) => (
          <ItemList
            key={index}
            item={done.text}
            index={index}
            switchList={() => switchList("dones", index)}
            deleteItem={() => deleteItem("dones", index)}
          />
        ))}
      </ListSection>
    </Container>
  );
}

export default DoneList;
