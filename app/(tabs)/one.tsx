// app/(tabs)/one.tsx (Product Search Screen)
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProductSearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Search</Text>
      <Text>Implement your search UI here.</Text>
      {/* Example Link to a product. Replace with your dynamic navigation. */}
      <Link
        href={{
          pathname: "/(tabs)/product/[id]",
          params: { id: '1' } // Example product ID
        }}
        style={styles.linkButton}
      >
        <Text style={styles.linkText}>Go to Product 1</Text>
      </Link>
      <Link
        href={{
          pathname: "/(tabs)/product/[id]",
          params: { id: '2' } // Example product ID
        }}
        style={styles.linkButton}
      >
        <Text style={styles.linkText}>Go to Product 2</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  }
});
