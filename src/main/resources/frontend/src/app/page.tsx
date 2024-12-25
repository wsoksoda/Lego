import React from 'react';
import {Text, Box, Center, Button,IconButton, HStack} from '@chakra-ui/react'
import LegoList from "@/app/components/legoList";

export default async function Home() {
  return (
      <Box>
        <Center>
          <Text fontSize={"4xl"}>
            Lego Sets
          </Text>
        </Center>
          <LegoList/>
          <HStack>

          </HStack>
      </Box>
  )
}
