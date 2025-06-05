import { Stack } from 'expo-router';
import React from 'react';

export default function ProductStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: 'Product Details' }} />
    </Stack>
  );
}
