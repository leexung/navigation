import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab'; // Assuming this path is correct
import { IconSymbol } from '@/components/ui/IconSymbol'; // Assuming this path is correct
import TabBarBackground from '@/components/ui/TabBarBackground'; // Assuming this path is correct
import { Colors } from '@/constants/Colors'; // Assuming this path is correct
import { useColorScheme } from '@/hooks/useColorScheme'; // Assuming this path is correct

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="one" // Corresponds to app/(tabs)/one.tsx
        options={{
          title: 'Search', // New title for the first tab
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />, // Example icon
        }}
      />
      <Tabs.Screen
        name="two" // Corresponds to app/(tabs)/two.tsx
        options={{
          title: 'History', // New title for the second tab
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="clock.fill" color={color} />, // Example icon
        }}
      />
      {/*
        The "product" routes (e.g., app/(tabs)/product/[id].tsx)
        are part of a stack navigator within the "one" (Search) tab.
        No separate Tabs.Screen for "product" is needed here.
      */}
    </Tabs>
  );
}
