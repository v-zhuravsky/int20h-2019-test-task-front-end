export interface Photo {
  url: string;
  emotions: Emotions;
}

interface Emotion {
  sadness: number;
  neutral: number;
  disgust: number;
  anger: number;
  surprise: number;
  fear: number;
  happiness: number;
}

type Emotions = Emotion[];

export type Photos = Photo[];
