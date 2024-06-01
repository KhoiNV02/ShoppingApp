import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './saga/rootSaga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['language', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
