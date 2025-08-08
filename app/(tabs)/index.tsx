import { createHomeStyles } from "@/assets/style/home.style";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Link } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { useQuery } from "convex/react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyle = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const isLoading = todos===undefined;
  if(isLoading) return <LoadingSpinner/>

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyle.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyle.safeArea}>
        <Header />
        <TodoInput />

        {todos?.map((todos) => <Text key={todos._id}>{todos.text}</Text>)}
      </SafeAreaView>
    </LinearGradient>
  );
}
