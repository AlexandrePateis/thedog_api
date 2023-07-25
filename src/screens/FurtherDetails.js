import { View, Text, FlatList } from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function FurtherDetails({ route }) {
  const { dog } = route.params;
  return (
    <View style={tw`p-4 bg-white rounded-md shadow-md flex-1`}>
  <Text style={tw`font-bold text-2xl mb-4 text-center text-gray-800`}>
    Further Information
  </Text>
  <FlatList
    data={dog.breeds}
    renderItem={({ item }) => (
      <View style={tw`my-4 border rounded-md p-4 bg-gray-100 shadow-md`}>
        <Text style={tw`text-lg font-bold mb-2 text-gray-800`}>
          Imperial weight: {item.weight.imperial}
        </Text>
        <Text style={tw`text-lg text-gray-600`}>
          Metric weight: {item.weight.metric}
        </Text>
        <Text style={tw`text-lg font-bold mb-2 text-gray-800`}>
          Imperial height: {item.height.imperial}
        </Text>
        <Text style={tw`text-lg text-gray-600`}>
          Metric height: {item.height.metric}
        </Text>
        <Text style={tw`text-lg text-gray-600`}>
          Reference image ID: {item.reference_image_id}
        </Text>
      </View>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
</View>

  );
}
