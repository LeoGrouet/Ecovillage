import { SafeAreaView } from "react-native-safe-area-context";

export default function Navbar() {
  return (
    <SafeAreaView style={{
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      gap: 20,
    }}>
    </SafeAreaView>
  );
}
