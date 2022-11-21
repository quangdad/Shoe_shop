import { Box, Heading, HStack, Image, ScrollView } from "native-base";
import React, { useState } from "react";
import { View, Text } from "react-native";
import NumericInput from "react-native-numeric-input";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import Rating from "../Components/Rating";

function SingleProcudeScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/1.jpg")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Adidas shoe form Amazon Shop
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            onChange={(value) => this.setState({ value })}
            valueType="real"
            totalWidth={140}
            totalHeight={30}
            step={1}
            maxValue={15}
            minValue={0}
            rounded
            borderColor={Colors.deepestGray}
            textColor={Colors.white}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả sản
          phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả
          sản phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm Mô tả sản phẩm
        </Text>
        <Buttone bg={Colors.page} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
      </ScrollView>
    </Box>
  );
}

export default SingleProcudeScreen;
