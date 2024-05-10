"use client";
import React from "react";
import Transcript from "@/components/Transcript";
import transcript from "./transcript.json";

const audioUrl = "/TestCall.wav";

const IndexPage: React.FC = () => {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-color-900">
      <div className="w-11/12 md:w-3/4 max-w-2xl flex flex-col justify-center gap-5 bg-color-950 p-5 rounded-md shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-color-100">Audio Transcript</h1> 
        <Transcript transcript={transcript} />
        <audio id="audio" className="w-full" src={audioUrl} controls />
      </div>
    </main>
  );
  
};

export default IndexPage;
