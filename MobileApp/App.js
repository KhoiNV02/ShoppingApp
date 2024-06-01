import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store';
import Navigation from './src/navigation/RootNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import Delete from './delete/delete';
function App() {
  return (
    <>
      {/* <Provider store={store}>
        <Delete />
      </Provider> */}
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Navigation />
            </PersistGate>
          </Provider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
      <Toast />
    </>
  );
}

export default App;
