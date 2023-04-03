import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from './src/infra/store/configureStore';
import ConfigsLoading from './src/screens/commons/configs_loading';

export const store = configureStore();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ConfigsLoading />
      </Provider>
    </NavigationContainer>
  );
}
