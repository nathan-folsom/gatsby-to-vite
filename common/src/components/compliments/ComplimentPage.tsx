import React from "react";
import Compliments, { Compliment } from "./Compliments";

export type ComplimentPageProps = {
  location: Location
};

export default function ComplimentPage({ location }: ComplimentPageProps) {
  return (
    <Compliments>
      <Compliment index={getIndex(location.pathname)} />
    </Compliments>
  );
}

function getIndex(path: string) {
  const splitPath = path.split("/");
  return parseInt(splitPath[splitPath.length - 1]);
}