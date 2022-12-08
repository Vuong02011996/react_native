/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
// import { runOnJS } from 'react-native-reanimated';

import {StyleSheet, View, Text} from 'react-native';
import {useCameraDevices, useFrameProcessor} from 'react-native-vision-camera';

import {Camera} from 'react-native-vision-camera';
// import { scanFaces, Face } from 'vision-camera-face-detector';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(false);
  // const [faces, setFaces] = React.useState<Face[]>();
  // const [faces, setFaces] = React.useState(Face);

  const devices = useCameraDevices();
  const device = devices.front;

  // React.useEffect(() => {
  //   console.log("faces: ", );
  // }, [faces]);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   console.log("frame: ", frame)
  //   // const scannedFaces = scanFaces(frame);
  //   // runOnJS(setFaces)(scannedFaces);
  // }, []);
  console.log('hasPermission: ', hasPermission);
  // console.log("device: ", device)
  return device != null && hasPermission ? (
    <View style={{height: 600, width: 400}}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        // frameProcessor={frameProcessor}
        // frameProcessorFps={5}
      />
      <Text style={{color: 'red', alignItems: 'center'}}>Hello</Text>
    </View>
  ) : (
    <Null></Null>
  );
}

function Null() {
  return (
    <View>
      <Text>Hello Device undefined</Text>
    </View>
  );
}
