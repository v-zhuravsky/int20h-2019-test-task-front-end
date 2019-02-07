import { IApiProvider } from './abstract/IApiProvider';
import { ApiProvider } from './provider/ApiProvider';

const provider: IApiProvider = new ApiProvider();

export const getApi = (): IApiProvider => provider;
