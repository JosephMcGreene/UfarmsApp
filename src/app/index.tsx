import React, { useState } from 'react'
import FarmersLandingInfo from 'components/FarmersLandingInfo'
import HostsLandingInfo from 'components/HostsLandingInfo'
import LandingForm from 'components/LandingForm'
import ModalTemplate from 'components/ModalTemplate'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import { landingStyles } from 'styles'

export default function App() {
  const [hostInfoShown, setHostInfoShown] = useState(false)
  const [farmerInfoShown, setFarmerInfoShown] = useState(false)

  return (
    <SafeAreaView style={landingStyles.container}>
      <Text style={landingStyles.h1}>Ufarms</Text>
      <Text style={landingStyles.h2}>Grow Your Own Crops</Text>
      <Text style={landingStyles.h3}>
        Rent backyard farm plots in your Denver neighborhood
      </Text>

      <LandingForm />

      <Text style={landingStyles.h2}>Info:</Text>
      <View style={landingStyles.btnsContainer}>
        <Pressable onPress={() => setFarmerInfoShown(true)}>
          <Text style={landingStyles.h3}>For Farmers</Text>
        </Pressable>
        <Pressable onPress={() => setHostInfoShown(true)}>
          <Text style={landingStyles.h3}>For Hosts</Text>
        </Pressable>
      </View>

      <ModalTemplate
        modalShown={farmerInfoShown}
        setModalShown={setFarmerInfoShown}>
        <FarmersLandingInfo />
      </ModalTemplate>

      <ModalTemplate
        modalShown={hostInfoShown}
        setModalShown={setHostInfoShown}>
        <HostsLandingInfo />
      </ModalTemplate>
    </SafeAreaView>
  )
}
