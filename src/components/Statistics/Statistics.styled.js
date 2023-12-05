import styled from '@emotion/styled';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const Container = styled.div`
  max-height: 350px;
  width: 350px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  border: 3px solid green;
  border-radius: 7px;

  h2 {
    margin-bottom: 50px;
    text-align: center;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 0px;
`;

export const InfoListItem = styled.li`
  flex: 1;
  display: flex;
  border: 1px solid gray;
  flex-direction: column;
  text-align: center;
  padding: 20px 0px;
  background-color: ${getRandomHexColor};
`;
