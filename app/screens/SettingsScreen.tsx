import React from 'react';
import { View, Text, Switch } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export const SettingsScreen = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <View className="flex-1 bg-background p-4">
      <View className="flex-row items-center justify-between bg-surface p-4 rounded-lg">
        <Text className="text-lg font-semibold text-text">Dark Mode</Text>
        <Switch
          value={mode === 'dark'}
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: 'var(--primary)' }}
        />
      </View>
    </View>
  );
};
