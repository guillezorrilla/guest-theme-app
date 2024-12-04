import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<any, 'Home'>;

const colorSchemes = ['blue', 'red', 'green', 'purple'] as const;

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold mb-4 text-text">
          Welcome to ThemesApp
        </Text>
        <Pressable
          className="bg-primary px-6 py-3 rounded-lg mb-6"
          onPress={() => navigation.navigate('Settings')}>
          <Text className="text-primary font-semibold">Go to Settings</Text>
        </Pressable>

        <View className="flex-row flex-wrap justify-center gap-4 px-4">
          {colorSchemes.map(scheme => (
            <Pressable key={scheme} className={'px-6 py-3 rounded-lg'}>
              <Text className="text-white font-semibold capitalize">
                {scheme}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};
