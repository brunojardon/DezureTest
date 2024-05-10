// interfaces

export interface TranscriptSegment {
  content: string;
  role: string;
  start: number;
  end: number;
}

export interface TranscriptProps {
  transcript: TranscriptSegment[];
}
