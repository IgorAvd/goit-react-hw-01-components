import styled from '@emotion/styled';

export const Container = styled.div`
  max-height: 365px;
  width: 250px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  border: 3px solid green;
  border-radius: 7px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    width: 100px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const StatsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 50px;
  margin-bottom: 0px;
  padding: 0px;
  text-align: center;
  background-color: lightgrey;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    border: 1px solid green;
  }
`;
