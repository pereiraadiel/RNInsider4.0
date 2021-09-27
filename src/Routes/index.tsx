import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StacKRoutes from './StackRoutes';
import Movies from '../pages/Movies';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#090a0e',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#e72f49',
        drawerActiveTintColor: '#FFF',
        drawerInactiveTintColor: '#FFF'
      }}
    >
      <Drawer.Screen 
        name="HomeDrawer" 
        component={StacKRoutes}
        options={{
          title: 'Home',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons 
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Movies" 
        component={Movies}
        options={{
          title: 'Meus Filmes',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons 
              name={focused ? 'archive' : 'archive-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default Routes;