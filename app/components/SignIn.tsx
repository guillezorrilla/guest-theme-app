import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

const SignIn = () => {
  return (
    <View className="m-4">
      <View className="flex flex-col items-center justify-center px-6 py-8 h-screen">
        <TouchableOpacity className="flex flex-row items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image
            className="w-16 h-16 mr-2"
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            alt="Logo"
          />
          <Text className="mt-2 text-xl font-medium text-black dark:text-white">
            React Native
          </Text>
        </TouchableOpacity>

        <View className="w-full bg-white py-8 px-4 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <View className="p-6">
            <Text className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Sign in to your account
            </Text>

            <View className="mt-8">
              <View>
                <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </Text>
                <TextInput
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                />
              </View>
              <View className="mt-8">
                <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </Text>
                <TextInput
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </View>
              <View className="flex flex-row items-center justify-between mt-8">
                <View className="flex flex-row items-start">
                  <View className="flex items-center">
                    <TouchableOpacity className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600" />
                  </View>
                  <View className="ml-3 text-sm">
                    <Text className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </Text>
                  </View>
                </View>
                <Text className="text-sm font-medium text-blue-600 dark:text-blue-500">
                  Forgot password?
                </Text>
              </View>
              <TouchableOpacity className="mt-4 w-full bg-blue-600 font-medium rounded-lg  px-5 py-2.5">
                <Text className="text-white text-sm text-center">Sign in</Text>
              </TouchableOpacity>
              <Text className="mt-4 text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{' '}
                <Text className="font-medium text-blue-600 dark:text-blue-500">
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
