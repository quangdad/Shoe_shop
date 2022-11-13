import { NativeBaseProvider } from 'native-base';
import HomeProducts from './src/Components/HomeProducts';
import HomeScreen from './src/Screens/HomeScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
  );
}

