import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image, FlatList,Dimensions,TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width; //full width

import ImageData from './imageData';

export default function HomePage({navigation}) {
  const navigateToImage = (imageName, imageUri) => {
    navigation.navigate('Details', {name: imageName, image: imageUri})
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ImageData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigateToImage(item.title, item.image)}
            >
            <Image
              style={styles.imageThumbnail}
              source={{ uri: item.image }}
            />
          </TouchableOpacity>
          )}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'flex-start',
  },
  imageContainer:{
    flex: 1,
    flexDirection: 'row',
    margin: 1,
    height:width/3,
  },
  imageThumbnail: {
    height: width/3,
    width: width/3,
  }
});
