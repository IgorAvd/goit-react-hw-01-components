import styled from '@emotion/styled';

export const Container = styled.table`
  width: 500px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;
  list-style: none;
  border-collapse: collapse;
  background: darkslateblue;
  border-radius: 12px;
  text-align: center;
  color: orange;
  font: 18px Arial;
  font-weight: bold;
  th,
  td {
    padding: 8px;
  }
  tbody tr:nth-of-type(even) {
    background-color: lightgray;
  }

  tbody tr:nth-of-type(odd) {
    background-color: lightblue;
  }
`;
