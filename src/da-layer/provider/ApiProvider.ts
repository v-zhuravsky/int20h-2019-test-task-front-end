import { IApiProvider } from '../abstract/IApiProvider';
import { IPhotosService } from '../abstract/IPhotosService';
import { PhotosService } from '../services/PhotosService';

export class ApiProvider implements IApiProvider {
  public photos: IPhotosService = new PhotosService();
}
