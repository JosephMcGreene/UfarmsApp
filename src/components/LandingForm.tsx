import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Pressable, SafeAreaView, Text, TextInput } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import CheckBox from 'react-native-check-box'
import { landingStyles } from 'styles'

export default function LandingForm() {
  const [isChecked, setIsChecked] = useState(false)
  const [isBouncyChecked, setIsBouncyChecked] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      zipcode: '',
    },
  })

  async function submit(data) {
    console.log(data)
  }

  return (
    <SafeAreaView style={landingStyles.form}>
      <Text style={landingStyles.label}>Email:</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="farmer@goodfoods.com"
            style={landingStyles.input}
            value={value}
          />
        )}
        rules={{ required: true }}
      />
      {errors.email && <Text>Email is required.</Text>}

      <Text style={landingStyles.label}>Zip Code:</Text>
      <Controller
        control={control}
        name="zipcode"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder="12345"
            style={landingStyles.input}
            value={value}
          />
        )}
        rules={{ required: true }}
      />
      {errors.zipcode && <Text>Zip Code is required.</Text>}

      <Text style={landingStyles.h3}>
        I want to grow (Select all that apply):
      </Text>
      {/* TODO It seems that React-Native doesn't have its own coire component for a checkbox, instead relying on community creators, so we need to decide which checkboxes to use for our forms:
      https://reactnative.directory/?search=checkbox */}
      {/* https://github.com/WrathChaos/react-native-bouncy-checkbox */}
      <BouncyCheckbox text="Berries" />
      <BouncyCheckbox text="Greens" />
      <BouncyCheckbox text="Herbs" />
      <BouncyCheckbox text="Flowers" />
      <BouncyCheckbox text="Vegetables" />
      <BouncyCheckbox text="Other" />

      {/* https://www.npmjs.com/package/react-native-check-box */}
      <CheckBox
        checkBoxColor="white"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText="Berries"
        rightTextStyle={{ color: 'white' }}
      />
      <Pressable
        accessibilityLabel="This is a submit button"
        onPress={handleSubmit(submit)}
        style={landingStyles.button}>
        <Text style={landingStyles.h3}>Join Waitlist</Text>
      </Pressable>
    </SafeAreaView>
  )
}
