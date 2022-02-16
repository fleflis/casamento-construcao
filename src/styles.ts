import styled from 'styled-components';

export const RootContainer = styled.main`
  display: block;
  width: calc(100vw - 3rem);
  height: 100vh;

  min-height: 700px;

  padding: 1.5rem;

  overflow: hidden;

  background-color: #ece2d9;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const OurImage = styled.img`
  width: 400px;
  height: 400px;

  object-fit: cover;
  object-position: center;

  box-shadow: 2px 5px 5px rgba(0,0,0,0.4);
  border-radius: 13px;
`;

export const Title = styled.h1`
  color: #10538C;
  font-size: 3.5rem;
  font-family: 'Caveat', cursive;
  margin-bottom: 0;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.1rem;
`

export const Description = styled.p`
  color: #313131;

  font-family: 'Architects Daughter', cursive;
  font-size: 1.25rem;

  text-align: center;
`;
