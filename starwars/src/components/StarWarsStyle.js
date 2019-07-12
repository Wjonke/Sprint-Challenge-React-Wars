import styled from 'styled-components';

export const CharCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 3em;
`

export const CharName = styled.h1`
  text-align: center;
  color: #9cb8ca;
  text-shadow: 1px 1px 5px rgb(59, 58, 58);
  border: 1px solid rgb(37, 37, 37);
  border-radius: 5px;
  background: rgb(139, 135, 135);
  padding: 1em;
`

export const CharAttributes = styled.div`
  border: 1px solid rgb(37, 37, 37); 
  border-radius: 5px;
`

export const Li = styled.li`
  list-style: square;
  padding-left: 4px;
  background: rgb(139, 135, 135);
  margin: 2px 0 2px 3px;
  border-radius: 5px;
  color: white;
`