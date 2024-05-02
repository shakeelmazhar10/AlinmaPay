import CryptoJS from 'crypto-js';
import { ApiHeaderProps, EncryptionVariableProps } from '@app/utils/types-and-interfaces';
import { constants } from '@utils/index';

export const queryParam = ({ url, method, body }: ApiHeaderProps): object => ({
  url: encryptVariable(url, constants?.encryptionKeys?.urlKey),
  method: encryptVariable(method, constants?.encryptionKeys?.methodKey),
  body: encryptVariable(body, constants?.encryptionKeys?.bodyKey)
});

export const encryptVariable = ({ variable, encryptionKey }: EncryptionVariableProps): string =>
  JSON.stringify(CryptoJS.HmacSHA512(variable, encryptionKey));
