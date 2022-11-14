import { Box, Flex, Text, Image } from "@chakra-ui/react"
import beWisely from "../../assets/navbar/beWisely.png"
export const Footer = () => {
  return (
    <Box bg={'white'} h={60}>
      <Flex alignItems={'center'} justifyContent={'center'} direction="column" gap={5} py={10}>
        <Image src={beWisely} alt={'beWisely logo'} w={200} pt={5} />
        <Text>Social media launch party creative Facebook iPad twitter.</Text>
        <Text>© All rights reserved</Text>
      </Flex>
    </Box>
  )
}