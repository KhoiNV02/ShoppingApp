import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../modules/Auth/components/LogInScreen/LoginScreen';
import SignupScreen from '../modules/Auth/components/SignUpScreen/SignupScreen';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name={'login'}
                component={LoginScreen}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name={'signup'}
                component={SignupScreen}
            />
        </Stack.Navigator>
    );
}
