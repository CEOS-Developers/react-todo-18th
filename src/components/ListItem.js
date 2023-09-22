import React from "react";
import styled from "styled-components";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

const ItemText = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 13px;
  margin: 3px 8px 0px 8px;
`;

const ClickedText = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 13px;
  margin: 3px 8px 0px 8px;
  text-decoration: line-through;
`;

const IconBox = styled.div`
  display: flex;
`;

export default function ListItem({ input, onClick, isClicked, deleteList }) {
  //삭제할 때 alert
  const OpenConfirm = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteList();
    }
  };

  return (
    <Item>
      {isClicked ? (
        <FontAwesomeIcon icon={faCircleCheck} style={{ height: 13 }} />
      ) : (
        <FontAwesomeIcon
          onClick={onClick}
          icon={faCircle}
          style={{ height: 13 }}
        />
      )}
      {isClicked ? (
        <ClickedText>{input}</ClickedText>
      ) : (
        <ItemText>{input}</ItemText>
      )}

      {isClicked ? (
        <IconBox>
          <FontAwesomeIcon
            icon={faRotateLeft}
            style={{ height: 13, marginRight: 3 }}
            onClick={onClick}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{ height: 13 }}
            onClick={OpenConfirm}
          />
        </IconBox>
      ) : (
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ height: 13 }}
          onClick={OpenConfirm}
        />
      )}
    </Item>
  );
}
