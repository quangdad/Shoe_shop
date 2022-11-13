import { Box, Center, Image, View, Text, VStack, Button } from "native-base";
import React from "react";
import {} from "react-native";
import Colors from "../color";
import Buttone from "../Components/Buttone";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.page} safeAreaTop>
      <Center w="full" h={230}>
        <Image
          size="lg"
          alt="logo"
          source={require("../../assets/icon2.png")}
        />
      </Center>
      <VStack space={6} px={3} alignItems="center">
        <Buttone bg={Colors.deepblack} color={Colors.white}>
          REGISTER
        </Buttone>
        <Buttone bg={Colors.white} color={Colors.deepblack}>
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
