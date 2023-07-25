import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

export default function BreedCard({ breed }) {
  return (
    <View style={tw`p-4 bg-white rounded-md shadow-md flex-1`}>
      <Text style={tw`font-bold text-lg mb-4 text-center`}>
        Dog Information
      </Text>
      <FlatList
        data={breed}
        renderItem={({ item }) => (
          <View
            key={breed.id}
            style={tw`my-4 border rounded-md p-4 bg-gray-100`}
          >
            <Text style={tw`text-base font-bold mb-2`}>Name: {item.name}</Text>
            <Text style={tw`text-base`}>Bred for: {item.bred_for}</Text>
            <Text style={tw`text-base`}>Temperament: {item.temperament}</Text>
            <Text style={tw`text-base`}>Life span: {item.life_span}</Text>
          </View>
        )}
      />
    </View>
  );
}
