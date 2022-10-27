import { StatusBar } from 'expo-status-bar';
import { SignedInStack } from './src/routes/navigation';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SignedInStack/>
    </>
  );
}


