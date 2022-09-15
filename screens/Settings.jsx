import React from 'react'
import { Avatar,Title,Subheading } from 'react-native-paper';
import { Button, Text, View } from "react-native-web";
function Settings() {
  return (
     <View style={{alignItems: 'center',marginTop:16}}>
      <Avatar.Text label='UN'/>
        <Title>User Name</Title>
        <Subheading>UserNAM@sspiderman.com</Subheading>
        <Button>Sign Out</Button>
        </View>
  )
}

export default Settings