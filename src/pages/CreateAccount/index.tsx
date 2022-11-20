import { Box, Flex, Text, Image, Stack, InputGroup, InputLeftElement, Input, Button, Divider } from "@chakra-ui/react"
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/Navbar"
import beWisely from "../../assets/navbar/beWisely.png"
import girl from "../../assets/createAccountPage/1 - girl.svg"
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"

export const CreateAccountPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex as={'section'} h={'100vh'} direction={'column'}>
        <NavBar />

        <Flex h={'100%'} >

          <Flex bg={'#FFCC4A'} h={'100%'} w={'100%'} justifyContent={'center'} alignItems="center" >
            <Image src={girl} alt={'girl with smartphone'} />
          </Flex>

          <Flex direction="column" bg={'white'} w={'50vw'} mx={'10vw'} justifyContent={'center'} alignItems="center" gap={10}>
            <Image src={beWisely} alt={'beWisely logo'} w={['180px', '150px', '300px']} mb={10} />
            <Stack as='form' spacing={8} mb={5}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<FaUser color='gray.300' />}
                />
                <Input type='text' placeholder='Nome completo' variant={'filled'} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<FaUser color='gray.300' />}
                />
                <Input type='email' placeholder='Email' variant={'filled'} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<FaLock color='gray.300' />}
                />
                <Input type='password' placeholder='Senha' variant={'filled'} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<FaLock color='gray.300' />}
                />
                <Input type='password' placeholder='Confirmar senha' variant={'filled'} />
              </InputGroup>
            </Stack>

            <Button bg={'#FD7E50'} color={'#ffffff'} fontFamily={'Lato'} w={'200px'} _hover={{ bg: '#fc9c79' }} onClick={() => navigate('/')}>Criar conta</Button>
            <Divider />
            <Button leftIcon={<FcGoogle />} bg={'white'} variant={'outline'} fontWeight={200}>Entrar com Google</Button>

          </Flex>

        </Flex>

      </Flex>
      <Footer />
    </Box>
  )
}