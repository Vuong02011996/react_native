/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
// import { runOnJS } from 'react-native-reanimated';
import RNFS from 'react-native-fs';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import axios from 'axios';

const CameraPage = () => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [nameStudent, setNameStudent] = React.useState('Unknown name');

  const devices = useCameraDevices();
  const device = devices.back;
  const camera = React.useRef(null);
  // console.log('devices: ', device);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  let data_res;

  // const camera = React.useRef<Camera>(null)

  const onPressButton = async () => {
    // console.log(camera.current)
    console.log(123);
    const photo = await camera.current.takePhoto({
      flash: 'off',
      // qualityPrioritization: "speed"
    });

    // console.log("photo: ", photo)
    // const RNFS = require("react-native-fs");
    // response.uri from react-native-camera
    RNFS.readFile(photo.path, 'base64').then(data => {
      // binary data
      // console.log('data', typeof data);

      var data = JSON.stringify({
        image: data,
      });
      var config = {
        method: 'post',
        url: 'http://14.241.120.239:30000/api/sign_in_face/verification',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          data_res = response.data;
          console.log('data_res: ', data_res);
          if (data_res?.name) {
            console.log('name', data_res.name);
            setNameStudent(data_res.name);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };
  // console.log(123)

  if (device == null && hasPermission == false)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  return (
    <SafeAreaView style={{flex: 1}}>
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
          activeOpacity={0.4}>
          <Text style={styles.text}>Click me</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          backgroundColor: '#ddd',
          color: 'red',
        }}>
        {nameStudent}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
    // alignItems: 'center',
  },
  camButton: {
    backgroundColor: '#ccc',
    height: 30,
    width: 70,
    cursor: 'pointer',
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});

export default CameraPage;
