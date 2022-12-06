import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

// resizeMode
// Sẽ có hai kích thước: kích thước w,h gốc của ảnh, kích thước chế độ xem(w, h trong style)(kích thước ta set)
// Dùng cover hoặc contain : cả hai đều phải giữ đúng tỉ lệ w/h của ảnh
// cover: resize kích thước ảnh sao cho w, h phải bằng hoặc lớn hơn kích thước xem, nếu không đúng tỉ lệ , cắt ảnh.
// contain: resize kích thước ảnh sao cho w, h phải nhỏ hơn hoặc bằng kích thước xem, nếu không đúng tỉ lệ có thể có khoảng trắng.

// Dùng stretch: sẽ resize ảnh cho đúng kích thước xem, có thể change the aspect ratio of image. (thay đổi tỉ lệ khung hình ảnh)

// Static Image
const StaticImageStyle = () => {
    return <Image source={require('../../images/flower-pot.png')} />;
};

// Network Images
// Unlike with static resources, you will need to manually specify the dimensions of your image.
const NetworkImageStyle = () => {
    return (
        <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ width: 400, height: 400 }}
        />
    );
};

// Uri Data Images
//  You can use the 'data:' uri scheme to use these images
const UriDataImageStyle = () => {
    return (
        // include at least width and height!
        <Image
            style={{
                width: 51,
                height: 51,
                resizeMode: 'contain',
            }}
            source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
        />
    );
};

const ImageStyle = UriDataImageStyle;
export default ImageStyle;

const styles = StyleSheet.create({});
