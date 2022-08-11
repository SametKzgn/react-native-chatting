import React,{useEffect} from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Separator from "../components/Separator";
import ContanctRow from "../components/ContanctRow";
function Chat({navigation}) {

  useEffect(()=> {
    const isLoggedIn= false;
    if(!isLoggedIn) {
      navigation.navigate("SignUp");
    }

  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <ContanctRow
        name="SAM Picker"
        subtitle="FIR FIR RAPINPAVYONU"
        onPress={() => {
          alert("bana basdın");
        }}
      />
      <Separator />
      <ContanctRow
        name="SAM KZGN"
        subtitle="FIR FIR RAPINPAVYONU"
        onPress={() => {
          alert("bana basdın");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
export default Chat;
