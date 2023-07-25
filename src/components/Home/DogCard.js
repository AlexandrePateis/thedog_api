import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function DogCard({ dog }) {
  return (
    <View style={tw`p-4 bg-white rounded-lg shadow-md`}>
      {dog.breeds?.map((breed) => (
        <View key={breed.id} style={tw`mb-4`}>
          <Text style={tw`font-bold text-xl mb-2`}>{breed?.name}</Text>
          <Image
            source={{
              uri: dog?.url,
            }}
            style={tw`w-80 h-80 rounded-lg`}
          />
          <View style={tw`mt-2`}>
            <Text>
              <Text style={tw`font-bold`}>Dog ID:</Text> {dog?.id}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
