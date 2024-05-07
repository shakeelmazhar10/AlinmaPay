import { appText } from '@i18n/translations';
import { useTypedSelector } from '@redux/store';

const useLocalization = () => {
  const { localizationFlag } = useTypedSelector((state) => state.localizationReducer);

  const lag = localizationFlag as keyof typeof appText;
  return appText[lag].translation;
};

export default useLocalization;
