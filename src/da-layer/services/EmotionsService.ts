import { IEmotionsService } from '../abstract/IEmotionsService';
import { endpoint } from '../apiEndpoint';
import { Emotions } from '../models/Emotions';

class EmotionsService implements IEmotionsService {
  public getEmotions(): Promise<Emotions> {
    return new Promise((resolve, reject) => {
      fetch(endpoint)
        .then(res => {
          resolve((res as unknown) as Emotions);
        })
        .catch(error => reject(error));
    });
  }
}
