import React from 'react'
import { Text, View } from 'react-native'
import { modalStyles } from 'styles'

export default function FarmersLandingInfo() {
  return (
    <View>
      <Text style={modalStyles.h2}>Find the Perfect Plot</Text>
      <Text style={modalStyles.p}>
        Browse available plots in your community, review yard details and rules,
        and book the best plot for your seasonal farming needs and budget.
      </Text>

      <Text style={modalStyles.h2}>Know before you grow</Text>
      <Text style={modalStyles.p}>
        Take our two-minute Farm Design Quiz to get your customized Farming
        Blueprint designed specifically for your plot.
      </Text>

      <Text style={modalStyles.h2}>Eat the rewards</Text>
      <Text style={modalStyles.p}>Maintain and enjoy your harvest!</Text>

      <Text style={modalStyles.h2}>Build local community</Text>
      <Text style={modalStyles.p}>
        Grow your own food while connecting with new friends.
      </Text>
    </View>
  )
}
