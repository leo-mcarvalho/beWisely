import { Flex, Text, Image, Input, InputGroup, InputLeftElement, Box, Button, IconButton } from "@chakra-ui/react"
import { NavBar } from "../../components/Navbar"
import bookGirl from "../../assets/searchPage/1 - bookGirl.svg"
import { FaUser } from "react-icons/fa"
import { RiSearchLine } from "react-icons/ri";
import { Footer } from "../../components/Footer";

export const SearchPage = () => {
  return (
    <Flex as={'section'} bg={'#0A2640'} h={'100vh'} direction={'column'} >
      <NavBar />
      <Flex gap={20} justifyContent={'center'} direction='column' mx={'10vw'} my={'auto'}>
        <Text color={'white'} fontSize={'5xl'} textAlign={'center'} >Understand Your Map & Timing</Text>
        <Flex direction='column' gap={10} w={'80vw'} justifyContent={'center'} alignItems="center">
          <Image src={bookGirl} alt={'girl with smartphone'} boxSize={'200'} />
          <Flex gap={5}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<RiSearchLine color='gray.300' />}
              />
              <Input type='text' placeholder='Pesquisar' bg={'white'} borderRadius={'full'} />
            </InputGroup>
            <IconButton icon={<RiSearchLine />} aria-label={"Pesquisar"} borderRadius={'full'} />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}