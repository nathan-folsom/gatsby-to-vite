import React from "react";
import Compliments, { compliments } from "./Compliments";
import { styled } from "linaria/react";

const Button = styled.a`
  border: none;
  outline: none;
  background: aliceblue;
`;

export type ComplimentsPageProps = {
  onClick: () => void;
};

export default function ComplimentsPage({ onClick }: ComplimentsPageProps) {
  return (
    <Compliments>
      <Button href={"compliment/" + Math.floor(Math.random() * compliments.length)}>Something...</Button>
    </Compliments>
  );
}
