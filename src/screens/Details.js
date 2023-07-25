import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BreedCard from '../components/Details/BreedCard';
import tw from 'twrnc/dist/esm';

export default function Details({ route }) {
  const { dog } = route.params;
  return (
    <SafeAreaView style={tw`flex-1 justify-start` }>
      <BreedCard breed={dog.breeds} />
    </SafeAreaView>
  );
}
