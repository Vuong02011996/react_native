import * as React from 'react';
import RNFetchBlob from 'rn-fetch-blob';

import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import axios from 'axios';

function callDetectFaceAxios(data, setNameStudent) {
  var data = JSON.stringify({
    image: data,
  });

  var config = {
    method: 'post',
    url: 'https://api-ai.erp.clover.edu.vn/clover/test/v2.0/api/sign_in_face/verification',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  var startTime = performance.now();
  axios(config)
    .then(function (response) {
      let data_res = response.data;
      console.log('data_res: ', data_res);
      if (data_res?.name) {
        console.log('name', data_res.name);
        setNameStudent(data_res.name);
      }
    })
    .catch(function (error) {
      console.log('error: ', error);
    });
  var endTime = performance.now();
  console.log(`Call to axios took ${endTime - startTime} milliseconds`);
}

const CameraPage = () => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [nameStudent, setNameStudent] = React.useState('Unknown name');

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;
  const camera = React.useRef(null);

  // Set permission
  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status == 'authorized');
    })();
  }, []);

  const takePhotoAndDetecFace = async () => {
    var startTime = performance.now();
    const photo = await camera.current.takeSnapshot({
      quality: 100,
      skipMetadata: true,
    });

    console.log('photo.path: ', photo.path);
    var endTime = performance.now();
    console.log(`Call to takePhoto took ${endTime - startTime} milliseconds`);

    // Using RNFetchBlob
    var startTime = performance.now();
    const fs = RNFetchBlob.fs;
    let filePath = photo.path;
    if (Platform.OS === 'android') {
      filePath = `file://${filePath}`;
    }
    const data_base64 = await fs.readFile(filePath, 'base64');
    var endTime = performance.now();
    console.log(`Call to readFile took ${endTime - startTime} milliseconds`);
    callDetectFaceAxios(data_base64, setNameStudent);
  };

  // Using auto
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      console.log('Runing mỗi 1s');
      takePhotoAndDetecFace();
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  if (device == null && hasPermission == false)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  console.log(123);

  return (
    <SafeAreaView style={{flex: 1}}>
      {hasPermission && device ? (
        <Camera
          ref={camera}
          style={{flex: 1}}
          device={device}
          isActive={true}
          photo={true}
        />
      ) : (
        <Text>You must accept camera permission</Text>
      )}
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
