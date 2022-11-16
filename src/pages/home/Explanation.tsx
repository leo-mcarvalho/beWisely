import { Flex, Box, Image, Text } from "@chakra-ui/react"
import student from "../../assets/homePage/2 - student.svg"
import rocket from "../../assets/homePage/3 - rocket.svg"

export const Explanation = () => {
  return (
    <Flex as={'section'} h={'100vh'} direction={'column'} >
      <Box m={'auto'}>
        <Flex gap={5} alignItems='center'>
          <Image src={student} boxSize={'md'} maxW={'40vw'} maxH={'400px'} />
          <Box as={'article'} w={'40vw'}>
            <Text fontSize={'5xl'} fontWeight={200} mb={5}>
              Picking the right Hiking Gear!
            </Text>

            <Text fontFamily={'lato'}>
              The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
              Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
            </Text>
          </Box>
        </Flex>
        <Flex gap={5} alignItems='center'>
          <Box as={'article'} w={'40vw'}>
            <Text fontSize={'5xl'} fontWeight={200} mb={5}>
              Picking the right Hiking Gear!
            </Text>

            <Text fontFamily={'lato'}>
              The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
              Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
            </Text>
          </Box>
          <Image src={rocket} boxSize={'md'} maxW={'40vw'} maxH={'400px'} />
        </Flex>
      </Box>
    </Flex>
  )
}