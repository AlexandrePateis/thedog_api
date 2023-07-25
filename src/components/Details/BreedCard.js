import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

export default function BreedCard({ breed }) {
  return (
    <View style={tw`p-4 bg-white rounded-md shadow-md flex-1`}>
      <Text style={tw`font-bold text-2xl mb-4 text-center text-gray-800`}>
        Dog Information
      </Text>
      <FlatList
        data={breed}
        renderItem={({ item }) => (
          <View style={tw`my-4 border rounded-md p-4 bg-gray-100 shadow-md`}>
            <Text style={tw`text-xl font-bold mb-2 text-gray-800`}>Name: {item.name}</Text>
            <Text style={tw`text-base text-gray-600`}>Bred for: {item.bred_for}</Text>
            <Text style={tw`text-base text-gray-600`}>Temperament: {item.temperament}</Text>
            <Text style={tw`text-base text-gray-600`}>Life span: {item.life_span}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Assuming "id" is a unique identifier for each item
      />
    </View>
  );
}
