import { StatusBar } from 'expo-status-bar';
import { SignedInStack } from './src/routes/navigation';
import { AuthNavigation } from './src/services/authentication/auth.check';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthNavigation/>
    </>
  );
}


