import React from 'react';
import { StyleSheet,View, Text, Image, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; 

const ImageDetail = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>
                {route.params.name}
            </Text>
            <Image
              style={styles.imageContainer}
              source={{ uri: route.params.image }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
      height: width/1.2,
      width: width/1.2,
    }
});
export default ImageDetail;