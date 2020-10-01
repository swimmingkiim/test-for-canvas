import React from "react";
import styled from "styled-components";

interface TemplateProps {
  canvas: React.ReactChild;
  coordinates: React.ReactChild;
}

const Template: React.FC<TemplateProps> = ({ canvas, coordinates }) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <CanvasContainer>{canvas}</CanvasContainer>
        <CoordinatesContainer>{coordinates}</CoordinatesContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Template;

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
`;
const InnerContainer = styled.main`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > section {
    padding: 2%;
  }
`;

const CanvasContainer = styled.section`
  width: 80%;
  height: 100%;
  background-color: #000000;
`;

const CoordinatesContainer = styled.section`
  width: 20%;
  height: 100%;
  background-color: blue;
`;
