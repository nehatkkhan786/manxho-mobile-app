import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import EditName from "../components/ModalScreen/EditName";
import OrderScreenModal from "../components/ModalScreen/OrderScreenModal";

const ProfileScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  return (
    <SafeAreaView>
      {/* <Header /> */}
      {/* Profile Header */}
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={require("../assets/Images/profile.png")}
          style={{ width: 100, height: 100 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 10 }}>
            Salman Khan
          </Text>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Entypo name="edit" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, marginTop: 5 }}>
          nehatkhan786@gmail.com
        </Text>
      </View>

      {/* Horizontal Border line */}
      <View
        style={{
          borderBottomColor: "gray",
          borderBottomWidth: 0.7,
          marginTop: 20,
        }}
      ></View>
      {/* End Horizontal border Line */}

      {/* List Item */}
      <TouchableOpacity onPress={() => setShowOrderModal(true)}>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            marginTop: 20,
            borderRadius: 20,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Octicons name="checklist" size={24} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 10 }} y>
            Orders
          </Text>
        </View>
      </TouchableOpacity>

      <EditName showModal={showModal} setShowModal={setShowModal} />

      <OrderScreenModal
        showOrderModal={showOrderModal}
        setShowOrderModal={setShowOrderModal}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
