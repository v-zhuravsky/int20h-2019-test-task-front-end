import { IApiProvider } from './abstract/IApiProvider';
import { ApiProvider } from './provider/ApiProvider';

const provider: IApiProvider = new ApiProvider();

/**
 * Provides ApiProvider methods to store layer
 * 
 * e.g. getApi().photos.getPhotos(...)...
 */
export const getApi = (): IApiProvider => provider;
