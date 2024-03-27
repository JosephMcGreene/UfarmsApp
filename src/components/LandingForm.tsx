import React from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, SafeAreaView, Text, TextInput } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { landingStyles } from 'styles'

export default function LandingForm() {
  return (
    <SafeAreaView style={landingStyles.form}>
      <Text style={landingStyles.label}>Zip Code:</Text>
      <TextInput style={landingStyles.input} />

      <Text style={landingStyles.label}>Email:</Text>
      <TextInput style={landingStyles.input} />

      <Text style={landingStyles.h3}>
        I want to grow (Select all that apply):
      </Text>

      <BouncyCheckbox text="Berries" />
      <BouncyCheckbox text="Greens" />
      <BouncyCheckbox text="Herbs" />
      <BouncyCheckbox text="Flowers" />
      <BouncyCheckbox text="Vegetables" />
      <BouncyCheckbox text="Other" />

      <Pressable
        accessibilityLabel="This is a submit button"
        onPress={() => console.log({ hello: 'world' })}
        style={landingStyles.button}>
        <Text style={landingStyles.h3}>Join Waitlist</Text>
      </Pressable>
    </SafeAreaView>
  )
}
