import { Flex, IconButton, Text, Image, Box, Heading } from "@chakra-ui/react"
import { NavBar } from "../../components/Navbar"
import { BiChevronLeft } from "react-icons/bi";
import hand from "../../assets/bookingPage/1 - hand.svg"

export const BookingPage = () => {
  return (
    <Flex as={'section'} bg={'#0A2640'} h={'100vh'} direction={'column'}>
      <NavBar />
      <IconButton icon={<BiChevronLeft />} bg={'transparent'} color={'white'} fontSize={'50'} aria-label={"Back"} alignSelf={'flex-start'} m={5} />
      <Flex m={'auto'} alignContent='center' justifyContent={'center'} gap={5} direction='column'>
        <Heading color='white' fontSize={'4xl'}>Understand Your Map & Timing</Heading>
        <Flex>
          <Image src={hand} alt='hand with a smartphone' />
          <Box borderRadius={'md'} bg={'white'}>
            <Flex as={'form'}>
              Form
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}