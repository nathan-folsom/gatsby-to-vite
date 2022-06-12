import React, { PropsWithChildren } from "react";
import { styled } from "linaria/react";

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.h2`
  color: darkblue;
`;

export const compliments = [
  "Handsome",
  "Pretty",
  "Strong",
  "Interesting"
]

export type ComplimentsProps = PropsWithChildren<{}>;

export default function Compliments({ children }: ComplimentsProps) {
  return (
    <Container>
      <Title>You are so</Title>
      {children}
    </Container>
  );
}

const Adjective = styled.a`
  color: blueviolet;
  font-size: 20px;
`;

export function Compliment({ index }: { index: number }) {
  return <Adjective href={"/compliment/" + Math.floor(Math.random() * compliments.length)}>
    {compliments[index]}
  </Adjective>;
}
