import { useState } from "react";
import setPage from "./App";

export default function Luka() {
  return (
    <div className="ze:px-8 md:px-[100px]">
      <img className="max-w-[500px] mx-auto" src="mog.jpg" alt="Get mogged, Luka" />
      <br />
      <p className="text-center">I see your Stanford CS degree and I raise you a Princeton CS degree and a minor in Vocal Performance</p>
      <a className="mx-auto block text-center text-blue-500 underline font-scp text-2xl" href="https://www.instagram.com/p/Cp4mmWjs26P/" rel="noreferrer" target="_blank">Listen to these heavenly pipes</a>
      <p className="text-center">Plus I'm younger than you, unc</p>
      <p className="text-center">1v1 me in Are You Smarter Than a 5th Grader</p>
    </div>
  );
}
