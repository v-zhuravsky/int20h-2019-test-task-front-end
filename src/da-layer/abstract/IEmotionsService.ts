import { Emotions } from '../models/Emotions';

export interface IEmotionsService {
  /**
   * Gets emotions from server
   */
  getEmotions(): Promise<Emotions>;
}
