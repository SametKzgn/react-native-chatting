import React, { useState } from "react";
import { Text, View } from "react-native-web";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from "react-native-paper";

function ChatList() {
  const [isDialogVisible, SetIsDialogVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <List.Item
        title="User Name"
        description="Hi, I Will be waiting For you"
        left={() => <Avatar.Text label="UN" size={56} />}
      />
      <Divider inset />
      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => SetIsDialogVisible(false)}
        >
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput label="Enter User Email" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => SetIsDialogVisible(false)}>Cancel</Button>
            <Button>Save</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon="plus"
        style={{ position: "absolute", bottom: 16, right: 16, color: "#fff" }}
        onPress={() => SetIsDialogVisible(true)}
      />
    </View>
  );
}

export default ChatList;
