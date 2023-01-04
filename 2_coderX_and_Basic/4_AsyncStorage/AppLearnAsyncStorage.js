import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SafeAreaView } from 'react-native-safe-area-context';

// https://github.com/react-native-async-storage/async-storage
// https://react-native-async-storage.github.io/async-storage/docs/usage
// https://react-native-async-storage.github.io/async-storage/docs/api

// Async Storage chỉ có thể lưu dữ liệu dạng chuỗi, string.
// Do đó
// + Khi lưu ta phải convert sang JSON bằng JSON.stringify()
// + Khi load ta parse ra dạng string trong JS bằng JSON.parse()

/**
 * setItem, multiSet: Storing data
 * getItem, multiGet: Reading data
 * mergeItem, multiMerge: Merges an existing value stored under key, with new value
 * removeItem, multiRemove: Removes item for a key
 * getAllKeys
 * clear: Removes whole AsyncStorage data, for all clients, libraries, etc.
 */

/**
 * Storing data
 * setItem() is used both :
 * to add new data item (when no data for given key exists),
 * and to modify existing item (when previous data for given key exists)
 * @returns
 */

/** Increasing Storage size
 * https://react-native-async-storage.github.io/async-storage/docs/limits/
 * https://react-native-async-storage.github.io/async-storage/docs/advanced/db_size
 * @param {*} value
 */
// Storing string value
const storeDataString = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
        // saving error
    }
};

// Storing object value
const storeDataObject = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (e) {
        // saving error
    }
};

/**
 * Reading data
 * getItem returns a promise that either resolves to stored value when data is found for given key,
 * or returns null otherwise
 * @returns
 */

// Reading string value
const getDataString = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key');
        if (value !== null) {
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }
};

// Reading object value

const getDataObject = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

const AppLearnAsyncStorage = () => {
    return (
        <SafeAreaView>
            <Text>AppLearnAsyncStorage</Text>
        </SafeAreaView>
    );
};
export default AppLearnAsyncStorage;

const styles = StyleSheet.create({});
