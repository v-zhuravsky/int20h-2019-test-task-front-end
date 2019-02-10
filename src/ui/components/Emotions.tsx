import React from 'react';

import sadnessIcon from '../img/emotions/sadness.png';
import neutralIcon from '../img/emotions/neutral.png';
import disgustIcon from '../img/emotions/disgust.png';
import angerIcon from '../img/emotions/anger.png';
import surpriseIcon from '../img/emotions/surprise.png';
import fearIcon from '../img/emotions/fear.png';
import happinessIcon from '../img/emotions/happiness.png';
import { Emotions as EmotionsType } from '../../da-layer/models/Photos';

const icons: Record<string, string> = {
  sadness: sadnessIcon,
  neutral: neutralIcon,
  disgust: disgustIcon,
  anger: angerIcon,
  surprise: surpriseIcon,
  fear: fearIcon,
  happiness: happinessIcon,
};

const pickEmotions = (emotions: EmotionsType) =>
  emotions.map((emotion, index) => (
    <img
      key={`emotion-${index}`}
      className="emotion"
      src={icons[findMaxEmotion(emotion as any)]}
    />
  ));

const findMaxEmotion = (emotion: Record<string, number>): string => {
  let maxValue = 0;
  let savedKey = '';
  Object.keys(emotion).forEach(key => {
    if (maxValue < emotion[key]) savedKey = key;
  });
  return savedKey;
};

const Emotions: React.FC<{ className: string; emotions: EmotionsType }> = ({
  className,
  emotions,
}) => <div className={className}>{pickEmotions(emotions)}</div>;

export default Emotions;
