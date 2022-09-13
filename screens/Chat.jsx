import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Separator from "../components/Separator";
import ContanctRow from "../components/ContanctRow";

const chat = [
  {
    users: ["me@yamandfdf.com", "saaa@gma.com"],
    messages: [],
  },
  {
    users: ["me@yamandfdf.com", "saaa@gma.com"],
    messages: [],
  },
  {
    users: ["me@yamandfdf.com", "saaa@gma.com"],
    messages: [],
  },
];
function Chat({ navigation }) {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignUp");
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      {chat.map((chats, index) => (
        <React.Fragment key={chat}>
          <ContanctRow
            name="SAM Picker"
            subtitle="FIR FIR RAPINPAVYONU"
            onPress={() => {

              navigation.navigate("Chats");
            }}
          />
          <Separator />
        </React.Fragment>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /*  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  }, */
});
export default Chat;
