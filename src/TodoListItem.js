import { useState } from 'react';
import styled from 'styled-components';

const TodoListItem = ({ item, onItemChange, remove }) => {
  const toggleCheck = () => {
    if (item.checked) {
      item.checked = false;
    } else {
      item.checked = true;
    }

    onItemChange(item);
  };
  return (
    <div>
      <ItemBox>
        <Checkbox defaultChecked={item.checked} onChange={toggleCheck} />
        {item.checked ? (
          <CheckedBox>
            <Label>{item.text}</Label>
          </CheckedBox>
        ) : (
          <UncheckedBox>
            <Label>{item.text}</Label>
          </UncheckedBox>
        )}
        <RemoveBut
          onClick={() => {
            remove(item.id);
          }}
        >
          X
        </RemoveBut>
      </ItemBox>
    </div>
  );
};

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  position: relative;

  &:checked {
    background: gray;
    border: none;

    &::before {
      content: '';
      position: absolute;
      top: 28%;
      left: 25%;
      transform: translate(-50%, -50%);
      width: 0.4rem;
      height: 0.15rem;
      border-left: 2px solid white;
      border-bottom: 2px solid white;
      transform: rotate(-45deg);
    }
  }
`;

const Label = styled.label`
  font-size: 1vw;
`;

const CheckedBox = styled(ItemBox)`
  color: gray;
  text-decoration: line-through;
`;

const UncheckedBox = styled(ItemBox)``;

const RemoveBut = styled.button`
  opacity: 0;
  transition: opacity 0.2s;

  ${ItemBox}:hover & {
    opacity: 1;
  }

  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;

  color: rgba(239, 64, 90, 0.5);

  margin-left: 20%;
`;

export default TodoListItem;
