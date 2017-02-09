import React from 'react';
import {View, Text} from 'react-native';

import {mapTweekToProps} from '@npmsoluto/react-tweek';

const MyComponent = (props) => {
    const {shouldmultiplex = "waiting..."} = props;
    const {remoteprompttimeoutIsenabled = "waiting..."} = props;
    const {resendscreenshotrequests = "waiting..."} = props;
    
    return (
      <View>
          <Text>{'shouldmultiplex: ' + shouldmultiplex}</Text>
          <Text>{'remoteprompttimeout_isenabled: ' + remoteprompttimeoutIsenabled}</Text>
          <Text>{'resendscreenshotrequests: ' + resendscreenshotrequests}</Text>                    
      </View>
    )
}

export default mapTweekToProps("legacy/mobileremote/_")(MyComponent);