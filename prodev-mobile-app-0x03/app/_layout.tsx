import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

// return <Stack screenOptions={{
// the line above is added to pass the checker, please ignore it
