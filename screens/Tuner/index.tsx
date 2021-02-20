import * as React from "react";
import { SafeAreaView } from "react-native";
import Pitchfinder from "pitchfinder";
import Recording from "react-native-recording";
import { ThemeContext } from "styled-components/native";

import * as Styled from "./index.styled";

import TunedNote from "../../components/TunedNote";
import Meter from "../../components/Meter";

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
] as const;

export type noteType = typeof noteStrings[number];

export type statusType =
  | "Play a note to start"
  | "Tuned"
  | "Too sharp"
  | "Too flat";

const middleA = 440;
const semiTone = 69;

const noteFromPitch = (frequency: number) => {
  const note = 12 * (Math.log(frequency / middleA) / Math.log(2));
  return Math.round(note) + semiTone;
};

const frequencyFromNote = (note: number) => {
  return middleA * Math.pow(2, (note - semiTone) / 12);
};

const centsOffFromPitch = (frequency: number, note: number) => {
  return Math.floor(
    (1200 * Math.log(frequency / frequencyFromNote(note))) / Math.log(2),
  );
};

export const Tuner = () => {
  const themeContext = React.useContext(ThemeContext);

  const [tunedNote, setTunedNote] = React.useState<noteType | "None">("None");
  const [cents, setCents] = React.useState<number>(0);
  const [shownFrequency, setShowedFrequency] = React.useState<number>(0);
  const [color, setColor] = React.useState<string>(themeContext.red);
  const [status, setStatus] = React.useState<statusType>(
    "Play a note to start",
  );

  React.useEffect(() => {
    Recording.init({
      bufferSize: 2048,
      sampleRate: 22050,
      bitsPerChannel: 16,
      channelsPerFrame: 1,
    });

    Recording.start();

    const listener = Recording.addRecordingEventListener(
      (data: Float32Array) => {
        const frequency = detectPitch(data);
        if (frequency) {
          const note = noteFromPitch(frequency);
          if (note && noteStrings[note % 12]) {
            setTunedNote(noteStrings[note % 12]);
            setCents(centsOffFromPitch(frequency, note));
            setShowedFrequency(Math.round(frequency));
          }
        }
      },
    );

    return () => {
      Recording.stop();
      listener.remove();
    };
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

  const detectPitch = Pitchfinder.YIN({ sampleRate: 22050 });

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
