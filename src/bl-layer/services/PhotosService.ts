import { IPhotosService } from '../abstract/IPhotoService';
import { Photos } from '../../da-layer/models/Photos';
import { getApi } from '../../da-layer/getApi';
import { IApiProvider } from '../../da-layer/abstract/IApiProvider';


export class PhotosService implements IPhotosService {

  private api: IApiProvider; 
  constructor(private perPage: number){
    this.api = getApi();
  }

  public getPhotos(page: number, emotion?: string): Promise<Photos> {
    return this.api.photos.getPhotos(this.perPage * (page - 1), this.perPage, emotion);
  }

  public getPhotoUrl(url: string): string {
    const arr = url.split('.');
    const name = arr[arr.length - 2];
    const newName = name.substr(0, name.length - 1) + 'z'
    arr[arr.length - 2] = newName;
    return arr.join('.');
  }
}
