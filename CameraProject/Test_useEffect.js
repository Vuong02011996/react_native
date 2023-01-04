import {View, Text, Button} from 'react-native';
import React from 'react';

const Test_useEffect = () => {
  const [count, setCount] = React.useState(0);
  let a = React.useRef(0);

  React.useEffect(() => {
    console.log('You clicked times: ', count);
  });
  return (
    <View>
      <Text>You clicked {count} times</Text>
      {console.log('render: ', a.current++)}
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="Click me"></Button>
    </View>
  );
};
export default Test_useEffect;
// Chốt callback của useEffect chỉ được gọi sau mỗi khi component render
