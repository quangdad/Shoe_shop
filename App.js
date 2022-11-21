import { NativeBaseProvider } from 'native-base';
import HomeProducts from './src/Components/HomeProducts';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SingleProcudeScreen from './src/Screens/SingleProduceScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen/>
    </NativeBaseProvider>
  );
}

