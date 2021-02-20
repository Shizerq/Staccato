import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.background};
`;

export const Header = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.foregroundColor};
  margin-top: 8%;
`;

export const Tuning = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #726e75;
  margin-top: 3%;
`;

export const TunedNoteContainer = styled.View`
  height: 70%;
  justify-content: center;
  align-content: center;
`;
