import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'axios';

// Networking is an inherently asynchronous operation. Fetch method will return a Promise.
// Using Promise
const getMoviesFromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => {
            return json.movies;
        })
        .catch((error) => {
            console.error(error);
        });
};
// Using async/await
const getMoviesFromApiAsync = async () => {
    try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        return json.movies;
    } catch (error) {
        console.error(error);
    }
};
// Don't forget to catch any errors that maybe thrown by fetch, otherwise they will be dropped silently.

// Example call API and render data by FlatList

const Networking = () => {
    // tạo biến data lưu trữ dữ liệu gọi từ API
    // biến isLoading để check nên render lại dữ liệu hay không.
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getMoviesAxios = async () => {
        console.log('Using axios');
        try {
            const response = await axios.get(
                'https://reactnative.dev/movies.json',
            );
            console.log(response.data);
            setData(response.data.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Dùng useEffect để getMovies không bị gọi lại khi render lại dữ liệu
    // truyên function chớ không phải gọi function ở đối số đầu tiên
    useEffect(() => {
        getMoviesAxios();
    }, []);
    return (
        <View
            style={{
                flex: 1,
                padding: 24,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>
                            {item.title}:{item.releaseYear}
                        </Text>
                    )}
                />
            )}
        </View>
    );
};

// Using other networking libraries
// The XMLHttpRequest API is built into React Native
// This means that you can use third party libraries such as frisbee or axios that depend on XMLHttpRequest
// Or you can use XMLHttpRequest API directly if you prefer.

// Using axios https://github.com/axios/axios
/**
 * npm install axios
 * import axios from 'axios';
 * Using ...
 */

// WebSocket Support

export default Networking;
