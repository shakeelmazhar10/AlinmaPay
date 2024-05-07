import CryptoJS from 'crypto-js';
import { ApiHeaderProps, EncryptionVariableProps } from '@app/utils/types-and-interfaces';
import { constants } from '@utils/index';

export const queryParam = ({ url, method, body }: ApiHeaderProps): object => ({
  url: encryptVariable(url, constants?.ENCRYPTIONS_KEYS?.urlKey),
  method: encryptVariable(method, constants?.ENCRYPTIONS_KEYS?.methodKey),
  body: encryptVariable(body, constants?.ENCRYPTIONS_KEYS?.bodyKey)
});

export const encryptVariable = ({ variable, encryptionKey }: EncryptionVariableProps): string =>
  JSON.stringify(CryptoJS.HmacSHA512(variable, encryptionKey));
