import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  Image,
  Text,
  Icon
} from '@chakra-ui/react';
import { BsBell, BsHeart, BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import beWisely from "../../assets/navbar/beWisely.png"
import noData from "../../assets/noData.svg"
export const NavBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem('token') != null;
  return (
    <>
      <Box bg={'white'} >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'} px={'3%'} m={'auto'}>
          <Flex gap={5} alignItems={'center'}>
            <Link href={'/search'}>
              <Icon as={BsSearch} fontSize={'2xl'} aria-label={'search'} />
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'unstyled'}
                cursor={'pointer'}
                minW={0}
                onClick={() => { isAuthenticated ? '' : navigate('/login') }}
              >
                <Icon as={BsBell} fontSize={'2xl'} aria-label={'notifications'} />
              </MenuButton>
              {isAuthenticated &&

                <MenuList alignItems={'center'}>
                  <Box py={1}>
                    <Center >
                      <Text>Notificações</Text>
                    </Center>
                  </Box>
                  <MenuDivider />
                  <MenuItem ><Image src={noData} alt='no Data' boxSize={'100'} mx={'auto'} /></MenuItem>
                </MenuList>
              }
            </Menu>
          </Flex>
          <Link href={'/'}>
            <Image src={beWisely} alt={'beWisely logo'} w={200} />
          </Link>
          <Flex gap={5} alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'unstyled'}
                cursor={'pointer'}
                minW={0}
                onClick={() => { isAuthenticated ? '' : navigate('/login') }}
              >
                <Icon as={BsHeart} fontSize={'2xl'} aria-label={'favorites'} />
              </MenuButton>
              {isAuthenticated &&
                <MenuList alignItems={'center'}>
                  <Box py={1}>
                    <Center >
                      <Text>Favoritos</Text>
                    </Center>
                  </Box>
                  <MenuDivider />
                  <MenuItem ><Image src={noData} alt='no Data' boxSize={'100'} mx={'auto'} /></MenuItem>
                </MenuList>
              }

            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                onClick={() => { isAuthenticated ? '' : navigate('/login') }}
              >
                <Avatar
                  size={'sm'}
                  bg={'#FFBD15'}
                // src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              {isAuthenticated &&
                <MenuList alignItems={'center'}>
                  <Box py={3}>
                    <Center >
                      <Avatar
                        size={'2xl'}
                        bg={'#FFBD15'}
                      // src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <Center>
                      <Text mt={1}>Username</Text>
                    </Center>
                  </Box>
                  <MenuDivider />
                  <MenuItem>Minha conta</MenuItem>
                  <MenuItem>Minhas aulas</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              }
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}