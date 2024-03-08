import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Button } from "react-native";
import { landingStyles } from "./styles";
//components
import LandingForm from "./components/LandingForm";

export default function App() {
  return (
    <View style={landingStyles.container}>
      <Text style={landingStyles.h1}>Ufarms</Text>
      <Text style={landingStyles.h2}>Grow Your Own Crops</Text>
      <Text style={landingStyles.h3}>
        Rent backyard farm plots in your Denver neighborhood
      </Text>

      <LandingForm />

      <Text style={landingStyles.h2}>Info:</Text>
      <View style={landingStyles.btnsContainer}>
        <Button
          onPress={() => alert("Button for farmers")}
          title="For Farmers"
        />
        <Button onPress={() => alert("Button for hosts")} title="For Hosts" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
