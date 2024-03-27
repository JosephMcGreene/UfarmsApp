import React from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { modalStyles } from 'styles'

interface ModalTemplateProps {
  modalShown: boolean
  setmodalShown: (modalShown: boolean) => void
  children: React.ReactNode
}

export default function ModalTemplate({
  modalShown,
  setmodalShown,
  children
}: ModalTemplateProps) {
  return (
    <Modal animationType="slide" transparent visible={modalShown}>
      <View style={modalStyles.modalView}>
        {children}
        <Pressable
          onPress={() => setmodalShown(!modalShown)}
          style={modalStyles.button}>
          <Text style={modalStyles.h2}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  )
}
