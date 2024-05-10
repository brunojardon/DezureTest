"use client";
import React, { useState } from "react";
import { TranscriptProps } from "@/types/transcriptionI";
import useTranscript from "@/hooks/useTranscript";

const Transcript: React.FC<TranscriptProps> = ({ transcript }) => {

  // Manejo del segmento actual
  const [currentSegment, setCurrentSegment] = useState(0);

  // Manejo de los segmentos
  useTranscript({ transcript, setCurrentSegment });

  // Manejo del tiempo de reproducción
  const handleSeek = (time: number) => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.currentTime = time;
  };

  return (
    <>
      {/* Mapeado de los segmentos de la transcripción */}
      {transcript.map((segment, index) => (
        <div
          key={index}
          className={
            "cursor-pointer transition-colors duration-300 hover:bg-color-600 text-pretty w-full p-2 mb-2 rounded-md " +
            `${index === currentSegment && "font-bold underline bg-color-700"}`
          }
          onClick={() => handleSeek(segment.start)}
        >
          
          {/* Rol */}
          <span
            className={
              segment.role === "agent"
                ? "text-color-300"
                : "text-color-100 font-bold"
            }
          >
            {segment.role}:{" "}
          </span>

          {/* Segmento */}
          <span className="ml-1 italic">{segment.content}</span>
        
        </div>
      ))}
    </>
  );
};
export default Transcript;
