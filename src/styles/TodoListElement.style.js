import styled from 'styled-components';

export const TodoListElementContainer = styled.li`
  //   width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(216, 216, 216);
  color: rgb(112, 112, 112);
  .high {
    color: black;
    font-family: 'SUITE-SemiBold';
  }

  .mid {
    color: rgb(120, 120, 120);
    font-family: 'SUITE-Medium';
  }

  .low {
    color: rgb(200, 200, 200);
    font-weight: 400;
  }

  .done {
    color: rgb(236, 236, 236) !important;
    font-weight: 400 !important;
  }
`;

export const ContentDiv = styled.div`
  flex-grow: 2;
`;

export const DateDiv = styled.div`
  margin: 0 5px;
`;

export const DoneButton = styled.button`
  margin: 0 5px 0 10px;
  width: 20px;
  height: 20px;
  color: green;
`;

export const DeleteButton = styled.button`
  padding: 0 10px 0 5px;
  color: rgb(202, 45, 24);
`;

export const SecretDiv = styled.div``;
