import React from 'react'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { landingStyles } from 'styles'

export default function LandingForm() {
  const produceTypes = [
    'Berries',
    'Greens',
    'Herbs',
    'Flowers',
    'Vegetables',
    'Other'
  ]

  return (
    <View style={landingStyles.form}>
      <Text style={landingStyles.label}>Zip Code:</Text>
      <TextInput style={landingStyles.input} />

      <Text style={landingStyles.label}>Email:</Text>
      <TextInput style={landingStyles.input} />

      <Text style={landingStyles.h3}>
        I want to grow (Select all that apply):
      </Text>

      <FlatList
        data={produceTypes}
        renderItem={({ item }) => (
          <BouncyCheckbox onPress={() => alert('oh hai')} text={item} />
        )}
      />

      <BouncyCheckbox onPress={() => alert('oh hai')} text="Vegetables" />

      <Pressable
        accessibilityLabel="This is a submit button"
        onPress={() => alert('You pressed me!')}
        style={landingStyles.button}>
        <Text>Join Waitlist</Text>
      </Pressable>
    </View>
  )
}
