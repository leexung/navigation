import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Placeholder for your product data type
interface Product {
  id: string;
  name: string;
  description: string;
  relatedProducts: { id: string; name: string }[]; // Simplified related product
}

// Placeholder for a function to fetch product data
const fetchProduct = (id: string): Product | undefined => {
  // In a real app, you would fetch this from an API or local store
  const products: Record<string, Product> = {
    '1': { id: '1', name: 'Product 1', description: 'This is product 1', relatedProducts: [{id: '2', name: 'Product 2'}, {id: '3', name: 'Product 3'}] },
    '2': { id: '2', name: 'Product 2', description: 'This is product 2', relatedProducts: [{id: '1', name: 'Product 1'}] },
    '3': { id: '3', name: 'Product 3', description: 'This is product 3', relatedProducts: [] },
  };
  return products[id];
};

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = fetchProduct(id || '');

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
        <Link href="/(tabs)/one">Go to Search</Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.relatedTitle}>Related Products:</Text>
      {product.relatedProducts.length > 0 ? (
        product.relatedProducts.map((relatedProduct) => (
          <Link
            key={relatedProduct.id}
            href={{
              pathname: '/(tabs)/product/[id]',
              params: { id: relatedProduct.id },
            }}
            style={styles.link}
          >
            <Text>{relatedProduct.name}</Text>
          </Link>
        ))
      ) : (
        <Text>No related products.</Text>
      )}

      {/* The back button is automatically handled by the Stack Navigator */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
  },
  relatedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    paddingVertical: 8,
  }
});
