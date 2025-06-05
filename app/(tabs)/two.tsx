// app/(tabs)/two.tsx (Product View History Screen)
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Placeholder for history item data
interface HistoryItem {
  id: string; // Corresponds to product ID
  name: string;
  viewedAt: string;
}

// Placeholder for history data
const historyData: HistoryItem[] = [
  { id: '1', name: 'Product 1', viewedAt: 'Viewed 5 mins ago' },
  { id: '3', name: 'Product 3', viewedAt: 'Viewed 1 hour ago' },
  // Add more history items as needed
];

export default function ProductHistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product View History</Text>
      {historyData.length > 0 ? (
        <FlatList
          data={historyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: '/(tabs)/product/[id]', // Navigate to the product detail screen
                params: { id: item.id },
              }}
              style={styles.historyItem}
            >
              <View>
                <Text style={styles.historyItemName}>{item.name}</Text>
                <Text style={styles.historyItemDate}>{item.viewedAt}</Text>
              </View>
            </Link>
          )}
        />
      ) : (
        <Text>No products viewed recently.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Added background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Centered title
  },
  historyItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  historyItemName: {
    fontSize: 18,
    color: '#007bff', // Link-like color
  },
  historyItemDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  }
});
