import {combineReducers} from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import homeProductReducer from './homeProductReducer';
import languageReducer from './languageReducer';
import cartItemReducer from './cartItemReducer';
import purchaseHistoryReducer from './purchaseHistoryReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
  product: productReducer,
  login: authReducer,
  homeProduct: homeProductReducer,
  language: languageReducer,
  cartItem: cartItemReducer,
  purchaseHistory:purchaseHistoryReducer,
  user:userReducer
});
export default rootReducer;
