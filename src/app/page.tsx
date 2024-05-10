"use client";
import React from "react";
import Transcript from "@/components/Transcript";
import transcript from "./transcript.json";

const audioUrl = "/TestCall.wav";

const IndexPage: React.FC = () => {
  return (
    <main className="h-full my-4 flex flex-col justify-center items-center">
      <div className="w-11/12 md:w-3/4 max-w-2xl flex flex-col justify-center gap-5 bg-stone-950 p-5 rounded-md shadow-md bg-opacity-75">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-stone-100">Audio Transcript</h1> 
        <Transcript transcript={transcript} />
        <audio id="audio" className="w-full" src={audioUrl} controls />
      </div>
    </main>
  );
  
};

export default IndexPage;
