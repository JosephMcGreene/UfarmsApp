import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { modalStyles } from 'styles'

export default function HostsLandingInfo() {
  return (
    <View>
      <Text style={modalStyles.h2}>List your yard</Text>
      <Text style={modalStyles.p}>
        Upload photos of the available farming area in your yard, set your
        monthly rate, and establish your yard rules.
      </Text>

      <Text style={modalStyles.h2}>Accept bookings</Text>
      <Text style={modalStyles.p}>
        Review farming requests from urban farmers in your area.
      </Text>

      <Text style={modalStyles.h2}>Get paid!</Text>
      <Text style={modalStyles.p}>
        Choose between secure payments, fresh produce, or BOTH
      </Text>

      <Pressable style={modalStyles.button}>
        <Text style={modalStyles.h2}>Join the Yard Hosts Waitlist</Text>
      </Pressable>
    </View>
  )
}
