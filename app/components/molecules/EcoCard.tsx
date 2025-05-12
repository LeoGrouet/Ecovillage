import { IDataLieu, IDataTips } from "@/app/@types/types";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import images from "../../assets/images";
import { Star } from "lucide-react-native";

export default function EcoCard({ data }: { data: IDataLieu | IDataTips }) {
  const image = data.id in images ? images[data.id] : "../../assets/images/ecolieu1.png";
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        {data.starred == true ? <View style={styles.starWrapper}>
          <Star fill={'#27A77E'} color={'#27A77E'} />
        </View> : <View style={styles.starWrapper}>
          <Star color={'#27A77E'} />
        </View>}
        <View style={styles.textContainer}>
          {data.name
            ? <> <Text style={styles.textCard}> {data.name} , {data.lieu} </Text>
              <Text style={styles.textCard}> à {data.distance} km </Text></>
            : <Text style={styles.textCard}> {data.titre} </Text>}
        </View>
      </ImageBackground >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: 250,
    height: "100%",
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,

  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 70,
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  textCard: {
    display: 'flex',
    fontWeight: 700,
    fontFamily: 'Subjectivity-Medium',
    textAlign: 'left',
    marginLeft: 8,
  },
  starWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.42)',
    padding: 5,
    borderRadius: 50,
  },
});
