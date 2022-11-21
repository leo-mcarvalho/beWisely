import { Box, Flex, Text, Image, Stack, InputGroup, InputLeftElement, Input, Button, Divider, useToast } from "@chakra-ui/react"
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/Navbar"
import beWisely from "../../assets/navbar/beWisely.png"
import kid from "../../assets/loginPage/1 - kid.svg"
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom"
import { useLocalObservable } from "mobx-react"
import { AuthStore } from "../../stores/authStore"
import { useState } from "react"

export const LoginPage = () => {
  const navigate = useNavigate();
  const store = useLocalObservable(() => new AuthStore());
  const toast = useToast();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box>
      <Flex as={'section'} h={'100vh'} direction={'column'}>
        <NavBar />

        <Flex h={'100%'} >
          <Flex direction="column" bg={'white'} w={'50vw'} mx={'10vw'} justifyContent={'center'} alignItems="center" gap={10}>
            <Image src={beWisely} alt={'beWisely logo'} w={['180px', '150px', '300px']} mb={10} />
            <Stack spacing={8} mb={5}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<FaUser color='gray.300' />}
                />
                <Input type='email' placeholder='Login' variant={'filled'} value={login} onChange={(e) => setLogin(e.target.value)} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<FaLock color='gray.300' />}
                />
                <Input type='password' placeholder='Password' variant={'filled'} value={password} onChange={(e: any) => setPassword(e.target.value)} />
              </InputGroup>
            </Stack>
            <Button bg={'#FFB905'} color={'#ffffff'} fontFamily={'Lato'} w={'200px'} _hover={{ bg: '#ffc531' }}
              onClick={() => store.authenticate(login, password).then(() => {
                store.error.message != '' ?
                  toast({
                    title: 'Não foi possível realizar o login',
                    description: `Código ${store.error.status} - ${store.error.message}`,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  }) : navigate('/')
              })}>Entrar</Button>
            <Divider />
            <Button bg={'#FD7E50'} color={'#ffffff'} fontFamily={'Lato'} w={'200px'} _hover={{ bg: '#fc9c79' }} onClick={() => navigate('/createaccount')}>Criar conta</Button>
            <Button leftIcon={<FcGoogle />} bg={'white'} variant={'outline'} fontWeight={200}>Entrar com Google</Button>

          </Flex>


          <Flex bg={'#0A2640'} h={'100%'} w={'100%'} justifyContent={'center'} alignItems="center">
            <Image src={kid} alt={'kid on computer'} />
          </Flex>
        </Flex>

      </Flex>
      <Footer />
    </Box>
  )
}