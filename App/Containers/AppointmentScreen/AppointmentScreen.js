import React from 'react'
import { Text, View } from 'react-native'
import styles from './AppointmentScreenStyle'

export default class AppointmentScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* You will probably want to insert your logo here */}
        <Text>AppointmentScreen</Text>
      </View>
    )
  }
}
