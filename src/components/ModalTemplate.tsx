import React from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { modalStyles } from 'styles'

export default function ModalTemplate({ modalShown, setModalShown, children }) {
  return (
    <Modal animationType="slide" transparent visible={modalShown}>
      <View style={modalStyles.modalView}>
        {children}

        <Pressable
          onPress={() => setModalShown(!modalShown)}
          style={modalStyles.button}>
          <Text style={modalStyles.h2}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  )
}
