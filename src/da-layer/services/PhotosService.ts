import { IPhotosService } from '../abstract/IPhotosService';
import { endpoint } from '../apiEndpoint';
import { Photos } from '../models/Photos';

export class PhotosService implements IPhotosService {
  public getPhotos(
    offset: number,
    count: number,
    emotion?: string,
    emotionValue?: number,
    emotionComparison?: string
  ): Promise<Photos> {
    return new Promise((resolve, reject) => {
      const emotionQuery = emotion
        ? `${emotion}=${emotionValue}&${emotion}_comparison=${emotionComparison}`
        : '';
      fetch(
        endpoint +
          `?offset=${offset}&count=${count}${emotionQuery ? `&${emotionQuery}` : ''}`
      )
        .then(res => {
          res.json().then(data => {
            resolve(data as Photos);
          });
        })
        .catch(error => reject(error));
    });
  }
}
