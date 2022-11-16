import { Flex, Text, Image, Box } from "@chakra-ui/react"
import computer from "../../assets/homePage/4 - computer.svg"
import chating from "../../assets/homePage/5 - chating.svg"
import talking from "../../assets/homePage/6 - talking.svg"
export const OurValues = () => {
  return (
    <Flex as={'section'} h={'100vh'} direction={'column'} bg={'#0A2640'}  >
      <Box my={'auto'}>
        <Text fontSize={'5xl'} fontWeight={200} mb={5} color={'#ffffff'} mx={'auto'} px={'20vw'}>
          Picking the right Hiking Gear!
        </Text>
        <Flex ml={'10vw'} alignItems='center' gap={10}>
          <Image src={computer} boxSize={'md'} w={'15vw'} maxW={'248px'} maxH={'248px'} />
          <Box w={'40vw'}>
            <Text color={'#ffffff'} mb={3}>
              We are commited.
            </Text>
            <Text color={'#ffffff'}>
              Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
            </Text>
          </Box>
        </Flex>
        <Flex ml={'20vw'} alignItems='center' gap={10}>
          <Image src={chating} boxSize={'md'} w={'15vw'} maxW={'248px'} maxH={'248px'} />
          <Box w={'40vw'}>
            <Text color={'#ffffff'} mb={3}>
              We are responsible.
            </Text>
            <Text color={'#ffffff'}>
              Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
            </Text>
          </Box>
        </Flex>

        <Flex ml={'30vw'} alignItems='center' gap={10}>
          <Image src={talking} boxSize={'md'} w={'15vw'} maxW={'248px'} maxH={'248px'} />
          <Box w={'40vw'}>
            <Text color={'#ffffff'} mb={3}>
              We aim for progress.
            </Text>
            <Text color={'#ffffff'}>
              Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}