import { IPhotosService } from '../abstract/IPhotosService';
import { endpoint } from '../apiEndpoint';
import { Photos } from '../models/Photos';

export class PhotosService implements IPhotosService {
  public getPhotos(offset: number, count: number): Promise<Photos> {
    return new Promise((resolve, reject) => {
      fetch(endpoint + `/photos?offset=${offset}&count=${count}`)
        .then(res => {
          res.json().then(data => {
            resolve(data as Photos);
          });
        })
        .catch(error => reject(error));
    });
  }
}
