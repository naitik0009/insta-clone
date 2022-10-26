import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/home.screen';
import { PostScreen } from './src/screens/post.screen';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <PostScreen />
    </>
  );
}


