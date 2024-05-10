"use client";
import { useEffect } from "react";
import { TranscriptSegment } from "@/types/transcriptionI";

interface useTranscriptProps {
  transcript: TranscriptSegment[];
  setCurrentSegment: React.Dispatch<React.SetStateAction<number>>;
}

const useTranscript = ({ transcript, setCurrentSegment }: useTranscriptProps) => {

  // Se ejecuta cada vez que transcript o setCurrentSegment cambian
  useEffect(() => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    // Función para actualizar el segmento actual
    const updateSegment = () => {
      const currentTime = audio.currentTime;

      // Buscar el próximo segmento basado en el tiempo actual
      const nextSegment = transcript.find(
        (segment) => currentTime >= segment.start && currentTime <= segment.end
      );

      // Si se encuentra un segmento, actualiza el segmento actual
      if (nextSegment) {
        setCurrentSegment(transcript.indexOf(nextSegment));
      }
    };

    // Agregar un evento para escuchar actualizaciones en el tiempo de reproducción del audio
    audio.addEventListener("timeupdate", updateSegment);

    // Eliminar el evento al desmontar el componente
    return () => {
      audio.removeEventListener("timeupdate", updateSegment);
    };
  }, [transcript, setCurrentSegment]);
};

export default useTranscript;
