import * as React from "react";
import { SafeAreaView } from "react-native";
import Pitchfinder from "pitchfinder";
import Recording from "react-native-recording";
import { ThemeContext } from "styled-components";

import * as Styled from "./index.styled";

import TunedNote from "../../components/TunedNote";
import Meter from "../../components/Meter";

export const Tuner = () => {
  const themeContext = React.useContext(ThemeContext);

  const [tunedNote, setTunedNote] = React.useState("None");
  const [cents, setCents] = React.useState(0);
  const [shownFrequency, setShowedFrequency] = React.useState(0);
  const [color, setColor] = React.useState(themeContext.red);
  const [status, setStatus] = React.useState("Play a note to start");

  React.useEffect(() => {
    Recording.init({
      bufferSize: 2048,
      sampleRate: 22050,
      bitsPerChannel: 16,
      channelsPerFrame: 1,
    });

    Recording.start();

    Recording.addRecordingEventListener((data) => {
      const frequency = detectPitch(data);
      const note = noteFromPitch(frequency);
      if (note && noteStrings[note % 12]) {
        setTunedNote(noteStrings[note % 12]);
        setCents(centsOffFromPitch(frequency, note));
        setShowedFrequency(Math.round(frequency));
      }
    });
  }, []);

  React.useEffect(() => {
    if (tunedNote !== "None") {
      if (cents >= -3 && cents <= 3) {
        setColor(themeContext.green);
        setStatus("Tuned");
      } else if (cents >= 4) {
        setColor(themeContext.red);
        setStatus("Too sharp");
      } else if (cents <= -4) {
        setColor(themeContext.red);
        setStatus("Too flat");
      }
    }
  }, [cents, tunedNote]);

  const noteStrings = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const detectPitch = new Pitchfinder.YIN({ sampleRate: 22050 });
  const middleA = 440;
  const semiTone = 69;

  const noteFromPitch = (frequency) => {
    const note = 12 * (Math.log(frequency / middleA) / Math.log(2));
    return Math.round(note) + semiTone;
  };

  const frequencyFromNote = (note) => {
    return middleA * Math.pow(2, (note - semiTone) / 12);
  };

  const centsOffFromPitch = (frequency, note) => {
    return Math.floor(
      (1200 * Math.log(frequency / frequencyFromNote(note))) / Math.log(2),
    );
  };

  return (
    <Styled.Container>
      <SafeAreaView>
        <Styled.Header>Instrument Tuner</Styled.Header>
        <Styled.TunedNoteContainer>
          <TunedNote color={color} note={tunedNote} status={status} />
        </Styled.TunedNoteContainer>
      </SafeAreaView>
      <Meter color={color} cents={cents} frequency={shownFrequency} />
    </Styled.Container>
  );
};

export default Tuner;
