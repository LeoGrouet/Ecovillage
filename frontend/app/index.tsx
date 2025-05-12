import { View } from "react-native";
import Navbar from "@/components/organisms/Navbar";
import Home from "@/components/pages/Home";
import HomeMain from "@/components/organisms/HomeMain";
import { useFonts } from 'expo-font';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Subjectivity-Black': require("../assets/fonts/Subjectivity/Subjectivity-Black.otf"),
    'Subjectivity-Bold': require("../assets/fonts/Subjectivity/Subjectivity-Bold.otf"),
    'Subjectivity-Light': require("../assets/fonts/Subjectivity/Subjectivity-Light.otf"),
    'Subjectivity-Medium': require("../assets/fonts/Subjectivity/Subjectivity-Medium.otf"),
    'Subjectivity-Regular': require("../assets/fonts/Subjectivity/Subjectivity-Regular.otf"),
    'Subjectivity-Thin': require("../assets/fonts/Subjectivity/Subjectivity-Thin.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
      }}
    >
      <Home />
      <HomeMain />
      <Navbar />
    </View >
  );
}
