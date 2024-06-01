import {I18n} from 'i18n-js';
import {LOGIN, SIGNUP} from '../../../store/actions/types';
import {en} from './en';
import {vi} from './vi';
const i18n = new I18n({
  en,
  vi,
});
export default i18n;
