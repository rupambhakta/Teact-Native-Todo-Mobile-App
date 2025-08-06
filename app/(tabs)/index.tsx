import { createHomeStyles } from "@/assets/style/home.style";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyle = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyle.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <Header/>
      <SafeAreaView style={homeStyle.safeArea}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
