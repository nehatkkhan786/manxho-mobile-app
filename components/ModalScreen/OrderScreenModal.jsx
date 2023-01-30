import { View, Text, Modal, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const OrderScreenModal = ({ showOrderModal, setShowOrderModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="formSheet"
      visible={showOrderModal}
      onRequestClose={() => setShowOrderModal(!showOrderModal)}
    >
      <SafeAreaView
        style={{
          alignItems: "center",
          backgroundColor: "#181818",
          height: "100%",
        }}
      >
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <AntDesign
            name="close"
            size={30}
            color="white"
            onPress={() => setShowOrderModal(false)}
          />
          <Text
            style={{
              color: "white",
              marginTop: 10,
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Recent Orders
          </Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default OrderScreenModal;
