import { useState } from "react";
import { landingStyles } from "../styles";
import { View, Text, TextInput, FlatList, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function LandingForm() {
  const produceTypes = [
    "Berries",
    "Greens",
    "Herbs",
    "Flowers",
    "Vegetables",
    "Other",
  ];

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
          <BouncyCheckbox onPress={() => alert("oh hai")} text={item} />
        )}
      />

      <BouncyCheckbox onPress={() => alert("oh hai")} text="Vegetables" />

      <Button
        onPress={() => alert("You pressed me!")}
        style={landingStyles.button}
        title="Join Waitlist"
        color="#fff"
        accessibilityLabel="This is a submit button"
      />
    </View>
  );
}
