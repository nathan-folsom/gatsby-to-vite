import React from "react";
import { styled } from "linaria/react";

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FourOhFour = styled.h1`
  font-size: 200px;
  position: relative;
  color: #c4f8c4;

  &:before {
    content: "404";
    position: absolute;
    top: 5px;
    right: 10px;
    color: chartreuse;
  }

  &:after {
    content: "404";
    position: absolute;
    top: 10px;
    right: 20px;
    color: darkgreen;
  }
`;

export type Props = {

};

export default function NotFoundPage({  }: Props) {
  return (
    <Page>
      <FourOhFour>404</FourOhFour>
    </Page>
  );
}
