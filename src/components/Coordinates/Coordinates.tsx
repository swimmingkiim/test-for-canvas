import React from "react";
import * as S from "./style";
import { StateType } from "page/reducer";

interface CoordinatesProps {
  list: StateType;
}

const Coordinates: React.FC<CoordinatesProps> = ({ list }) => {
  return (
    <S.CoordinatesContainer>
      <S.CoordinatesList>
        {list.map((coordinate) => {
          return (
            <S.CoordinatesItem>{`${coordinate.x} - ${coordinate.y}`}</S.CoordinatesItem>
          );
        })}
      </S.CoordinatesList>
    </S.CoordinatesContainer>
  );
};

export default Coordinates;
