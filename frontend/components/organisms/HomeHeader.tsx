import { SafeAreaView, Text, View } from "react-native";
import { EllipsisVertical, CircleUser } from 'lucide-react-native';
import { StyleSheet } from "react-native";

export default function HomeHeader() {
  return (
    <SafeAreaView>
      <View style={style.header}>
        <View style={{
          flexDirection: "row",
          alignItems: "center"
        }}>
          <EllipsisVertical color={"#474747"} />
          <View style={style.textHeader}>
            <Text style={style.titleTextHeader}>Bonjour Chloé,</Text>
            <Text style={style.p}>Où va t-on aujourd'hui?</Text>
          </View>
        </View>
        <CircleUser size={36} color={"#474747"} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 23,
    fontFamily: "Subjectivity",
  },
  textHeader: {
    alignContent: "center"
  },
  titleTextHeader: { fontSize: 30, color: "#474747" },
  p: {
    color: "#C2BAAF"
  }
});
