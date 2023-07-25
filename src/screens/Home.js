import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR from 'swr';
import Loading from '../components/General/Loading';
import DogCard from '../components/Home/DogCard';
import tw from 'twrnc'; // Make sure to use the correct import for tailwind styles
import axios from 'axios';
import BreedCard from '../components/Details/BreedCard';

export default function Home({ navigation }) {
  const [rawData, setRawData] = useState([]);
  const [handledData, setHandledData] = useState([]);

  const handleNullData = () => {
    const resp = rawData.filter((item) => item?.breeds?.length > 0);
    setHandledData(resp);
  };

  useEffect(() => {
    if (rawData) {
      handleNullData();
    }
  }, [rawData]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://api.thedogapi.com/v1/images/search?limit=100&api_key=live_AEgbgO3mSg4wZ7r0zEErUOy0K2pqaOWMznH8sRnNZlLwlXjU3ab8Ojb9lIMBI8ps',
        );
        setRawData(response.data);
      } catch (error) {
        console.error('Ocorreu um erro ao obter os dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`text-3xl font-bold text-center my-4`}>Dog App</Text>
      <FlatList
        data={handledData}
        renderItem={({ item }) => (
          <View key={item.id} style={tw`my-4 items-center flex gap-4 `}>
            <DogCard dog={item} />

            <View style={tw`flex-row justify-center gap-4 mx-4`}>
              <TouchableOpacity
                style={tw`flex-1 px-4 py-2 bg-green-500 rounded-md`}
                onPress={() => navigation.navigate('Details', { dog: item })}
              >
                <Text style={tw`text-white text-center font-bold`}>
                  Detalhes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex-1 px-4 py-2 bg-green-500 rounded-md`}
                onPress={() =>
                  navigation.navigate('FurtherDetails', { dog: item })
                }
              >
                <Text style={tw`text-white text-center font-bold`}>
                  Outros detalhes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Loading />}
      />
    </SafeAreaView>
  );
}
