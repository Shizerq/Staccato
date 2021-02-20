import * as React from "react";
import * as Styled from "./index.styled";
import { noteType, statusType } from "../../screens/Tuner";

interface Props {
  color: string;
  note: noteType | "None";
  status: statusType;
}

export const TunedNote: React.FC<Props> = ({ color, note, status }) => {
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
