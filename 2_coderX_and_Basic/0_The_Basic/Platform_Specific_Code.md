# Platform Specific Code

-   React Native provides two ways to organize your code and separate it by platform:
    -   Using the Platform module.
    -   Using platform-specific file extensions.

# Platform module

-   React Native provides a module that detects the platform in which the app is running.

```
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});
```

-   There is also a Platform.select method available, that given an object where keys can be one of 'ios' | 'android' | 'native' | 'default'.

```
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});
```

## Detecting the Android version

```
import { Platform } from 'react-native';

```
