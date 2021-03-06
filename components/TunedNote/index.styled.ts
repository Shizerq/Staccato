import styled from "styled-components/native";

interface TextProps {
  color: string;
}

export const Circle = styled.View`
  width: 265px;
  height: 265px;

  align-self: center;

  border-radius: 132.5px;
  border-style: dotted;
  border-color: ${({ theme }) => theme.foregroundColor};
  border-width: 6px;
`;

export const Container = styled.View`
  flex: 1;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Note = styled.Text<TextProps>`
  font-size: 80px;
  color: ${({ color }) => color};
`;

export const Status = styled.Text<TextProps>`
  font-size: 19px;
  color: ${({ color }) => color};
`;
