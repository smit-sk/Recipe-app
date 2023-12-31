
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Authentication/Login/login';
import WelcomeScreen from './components/Welcome Screen/welcome';
import { store } from './Redux/store';
import SignUpScreen from './components/Authentication/Signup/signup';
import ForgotPasswordScreen from './components/Authentication/ForgotPassword/forgotpw';
import HomeScreen from './components/Main/Home/home_screen';
import ViewRecipe from './components/Main/View Recipe/view_recipe';
import AddRecipeScreen from './components/Main/Add Recipe/add_recipe_screen';
import MyRecipe from './components/Main/My Recipe/my_recipe';
import EditRecipeScreen from './components/Main/Edit Recipe/edit_recipe';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={SignUpScreen} options={
          { 
            headerShown: false
          }} />
          <Stack.Screen name="Forgot" component={ForgotPasswordScreen} options={
          {
            headerShown: false
          }} />
          <Stack.Screen name="Home" component={HomeScreen} options={
          {
            headerShown: false
          }} />
          <Stack.Screen name="View Recipe" component={ViewRecipe} options={
          {
            headerShown: false
          }} />
          <Stack.Screen name="Add Recipe" component={AddRecipeScreen} options={
          {
            headerShown: false
          }} />
          <Stack.Screen name="Edit Recipe" component={EditRecipeScreen} options={
          {
            headerShown: false
          }} />
           <Stack.Screen name="My Recipe" component={MyRecipe} options={
          {
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

