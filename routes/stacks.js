import { View, Text } from 'react-native'
import React from 'react'

const stacks = () => {
  const Stack = createNativeStackNavigator();
   return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Viewall" component={Viewall} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Termsncondition" component={Termsncondition} />
        <Stack.Screen name="Profilephoto" component={Profilephoto} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

  

export default stacks