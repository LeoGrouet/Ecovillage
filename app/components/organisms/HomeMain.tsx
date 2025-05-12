import { FlatList, Text, View } from "react-native";
import ecolieujson from "../../app/data/ecolieu.json";
import ecotipsjson from "../../app/data/ecotips.json";
import EcoCard from "../molecules/EcoCard";

export default function HomeMain() {

  return (
    <View style={{
      marginLeft: 21,
    }}>
      <Text>Les plus proches</Text >
      <FlatList
        style={{
          marginTop: 10,
          height: 350,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={ecolieujson}
        renderItem={({ item }) => (
          <EcoCard data={item} />
        )}
      />
      <FlatList
        style={{
          marginTop: 10,
          height: 200,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={ecotipsjson}
        renderItem={({ item }) => (
          <EcoCard data={item} />
        )}
      />
    </View>
  );
}
