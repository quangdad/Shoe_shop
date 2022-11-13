import { Box, HStack, Input, Pressable, Text } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import Colors from "../color";

function HomeSearch() {
  return (
    <HStack
      space={3}
      w="full%"
      bg={Colors.main}
      px={6}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, Adidas ..."
        w="85%"
        bg={Colors.white}
        type="search"
        variant='filled'
        h={12}
        borderWidth={0}
        _focus={{
            bg: Colors.white,
        }}
      />
      <Pressable ml={3}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          w='80%'
          rounded="full"
          position="absolute"
          top={-13}
          left={1}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontsize: "11px",
          }}
          alignItems='center'
        >
            5
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
