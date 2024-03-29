import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable } from "react-native";
import { landingStyles } from "./styles";
//components
import LandingForm from "./components/LandingForm";
import ModalTemplate from "./components/ModalTemplate";
import HostsLandingInfo from "./components/HostsLandingInfo";

export default function App() {
  const [modalShown, setModalShown] = useState(false);

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
        <Pressable onPress={() => alert("Button for farmers")}>
          <Text style={landingStyles.h3}>For Farmers</Text>
        </Pressable>
        <Pressable onPress={() => setModalShown(true)}>
          <Text style={landingStyles.h3}>For Hosts</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />

      <ModalTemplate modalShown={modalShown} setModalShown={setModalShown}>
        <HostsLandingInfo />
      </ModalTemplate>
    </View>
  );
}
