import * as React from "react";
import * as Styled from "./index.styled";

export const TunedNote = ({ color, note, status }) => {
  return (
    <Styled.Circle>
      <Styled.Container>
        <Styled.Note color={color}>{note}</Styled.Note>
        <Styled.Status color={color}>{status}</Styled.Status>
      </Styled.Container>
    </Styled.Circle>
  );
};

export default TunedNote;
