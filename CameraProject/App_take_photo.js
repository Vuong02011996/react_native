/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
// import { runOnJS } from 'react-native-reanimated';
import RNFS from "react-native-fs"

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
    Camera,
    useCameraDevices
} from 'react-native-vision-camera';


const CameraPage = () => {

    const [hasPermission, setHasPermission] = React.useState(false);
    const devices = useCameraDevices()
    const device = devices.front
    const camera = React.useRef(null)
    // const camera = React.useRef<Camera>(null)
  
    const onPressButton = async () => {
      // console.log(camera.current)
      console.log(123)
      const photo = await camera.current.takePhoto({
        flash: 'off',
        // qualityPrioritization: "speed"
      })
  
      // console.log("photo: ", photo)
      // const RNFS = require("react-native-fs");
      // response.uri from react-native-camera
      RNFS.readFile(photo.path, "base64").then(data => {
        // binary data
        console.log("data", data);
      });
    }
      // console.log(123)

    React.useEffect(() => {
        (async () => {
          const status = await Camera.requestCameraPermission();
          setHasPermission(status === 'authorized');
        })();
      }, []);
    
    if (device == null && hasPermission == false) return <View><Text>Loading</Text></View>
    return (
          <View style={{flex: 1}}>
            <Camera
                ref={camera}
                // style={StyleSheet.absoluteFill}
                style={{flex: 1}}
                device={device}
                isActive={true}
                photo={true}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.camButton}
                    onPress={onPressButton}
                >
                    <Text style={styles.text}>Click me</Text>
                </TouchableOpacity>
            </View>
          </View>
  
    ) 
}

const styles = StyleSheet.create({
    buttonContainer: {
      // alignItems: 'center',

    },
    camButton: {
      // backgroundColor: "blue"
    },
    text: {
      // textTransform: "uppercase",
      // fontWeight: "bold",
      // alignItems: "center",
    }
})

export default CameraPage