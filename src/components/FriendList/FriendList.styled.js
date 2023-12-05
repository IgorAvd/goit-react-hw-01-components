import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  width: 350px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  list-style: none;
  gap: 10px;
`;

export const FriendItem = styled.li`
  padding: 10px;
  border: 2px solid grey;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'blue')};
  }

  p {
    font-weight: 500;
    font-size: 20px;
  }
`;
