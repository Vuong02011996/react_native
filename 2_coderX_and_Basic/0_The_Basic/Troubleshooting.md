# No transports available

-   If you load another module that requires WebSockets, such as Firebase, be sure to load/require it after react-native

```
import React from 'react';
import Firebase from 'firebase';
```

# Unable to start react-native package manager

-   Case 1: Error "code":"ENOSPC","errno":"ENOSPC"

```
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
