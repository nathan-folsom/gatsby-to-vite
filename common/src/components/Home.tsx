import React from "react";
import { styled } from "linaria/react";

const Container = styled.div`
  padding: 40px;
`;

const Link = styled.a`
  color: coral;
`;

export type HomeProps = {

};

export default function Home({  }: HomeProps) {
  return (
    <Container>
      <h1>Home Page</h1>
      <Link href={"/compliment"}>Oh hey there...</Link>
    </Container>
  );
}
