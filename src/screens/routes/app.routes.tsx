import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Register } from '../Register';
import { Dashboard } from '../Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarInactiveTintColor: theme.colors.text,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          height: 88,
          padding: Platform.OS === 'ios' ? '20' : 0
        },
      }}
    >
      <Screen 
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen 
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="attach-money"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen 
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="pie-chart"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  )
}