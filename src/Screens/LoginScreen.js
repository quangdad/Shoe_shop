import {
  Box,
  Heading,
  Input,
  VStack,
  Text,
  View,
  Image,
  Button,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from "../color";

function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/bg2.webp")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <MaterialCommunityIcons
                name="email"
                size={24}
                color={Colors.main}
              />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="80%"
            pl={2}
            color={Colors.main}
            boderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.main} />
            }
            variant="underlined"
            placeholder="**********"
            w="80%"
            type="password"
            pl={2}
            color={Colors.main}
            boderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="25%"
          rounded={50}
          bg={Colors.main}
        >
          LOGIN
        </Button>
        <Pressable mt={4}>
          <Text color={Colors.deepblack}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
