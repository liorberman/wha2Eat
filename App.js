import React from 'react';
import { View } from 'react-native';
import RoundImage from './app/components/images/RoundImage';
import Heading from './app/components/main/Heading';
import Screen from './app/components/main/Screen';
import CategoryWidget from './app/components/recipes/CategoryWidget';
import RecipeCard from './app/components/recipes/RecipeCard';
import ListItem from './app/components/lists/ListItem';
import ProfileScreen from './app/screens/ProfileScreen';
import HomeScreen from './app/screens/HomeScreen';
import EditProfileScreen from './app/screens/EditProfileScreen';
import ContactScreen from './app/screens/ContactScreen';
import IngredientWidget from './app/components/recipes/IngredientWidget';
import RecipeScreen from './app/screens/RecipeScreen';

// THIS MAIN PAGE IS CURRENTLY ONLY FOR TESTING OUT DIFFERENT COMPONENTS!

const categories = [
    {name: "Spicy"},
    {name: "Indian"},
]



export default function App() {
  return (
     <RecipeScreen/>
  );
}

