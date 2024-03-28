import React, { useState } from 'react'
// * https://react-hook-form.com/
import { Controller, useForm } from 'react-hook-form'
import { Pressable, SafeAreaView, Text, TextInput } from 'react-native'
// * If we don't like this checkbox: https://reactnative.directory/?search=checkbox
import CheckBox from 'react-native-check-box'
import { landingStyles } from 'styles'

interface formData {
  email: string
  produceTypes?: string[]
  zipcode: string
}

export default function LandingForm() {
  const [isChecked, setIsChecked] = useState(false)

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

  /**
   * Currently, logs the form data for email and zipcode to the Expo console. Will need to be updated to make a POST request to UfarmsServer
   *
   * @param {Object} data the data to be POSTed
   */
  async function submit(data: formData) {
    console.log(data)

    // TODO make POST request to our backend route
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

      {/* ! Important note: Joseph stopped mid-way through adding functionality to these checkboxes until we know exactly what needs to go on this form */}
      {/* <CheckBox
        checkBoxColor="white"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText="Berries"
        rightTextStyle={{ color: 'white' }}
      />
      <CheckBox
        checkBoxColor="white"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText="Herbs"
        rightTextStyle={{ color: 'white' }}
      />
      <CheckBox
        checkBoxColor="white"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText="Flowers"
        rightTextStyle={{ color: 'white' }}
      />
      <CheckBox
        checkBoxColor="white"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText="Vegetables"
        rightTextStyle={{ color: 'white' }}
      />
      <CheckBox
        checkBoxColor="white"
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText="Other"
        rightTextStyle={{ color: 'white' }}
      /> */}

      <Pressable
        accessibilityLabel="This is a submit button"
        onPress={handleSubmit(submit)}
        style={landingStyles.button}>
        <Text style={landingStyles.h3}>Join Waitlist</Text>
      </Pressable>
    </SafeAreaView>
  )
}
