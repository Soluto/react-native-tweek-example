import React from 'react';
import {View, Text} from 'react-native';

import {withTweekKeys} from '@npmsoluto/react-tweek';

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

export default withTweekKeys("legacy/mobileremote/_")(MyComponent);