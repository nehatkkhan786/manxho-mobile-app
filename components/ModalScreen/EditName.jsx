import {
  View,
  Text,
  Modal,
  Button,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../../themes/ThemeColor";

const EditName = ({ showModal, setShowModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
      presentationStyle="formSheet"
    >
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.primary,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Update Name
        </Text>
        <TextInput
          placeholder="Update Your Name"
          style={{
            width: "80%",
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 20,
            borderColor: "red",
            fontSize: 20,
            backgroundColor: "white",
            marginTop: 20,
            color: "black",
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity>
            <Button
              title="Close"
              color={colors.buttonPrimary}
              onPress={() => setShowModal(false)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Button title="Update" color={colors.buttonPrimary} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default EditName;
