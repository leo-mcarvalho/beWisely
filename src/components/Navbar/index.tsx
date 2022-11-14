import { ReactNode } from 'react';
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
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  IconButton,
  chakra,
  Image,
  Text
} from '@chakra-ui/react';
import { BsBell, BsHeart, BsSearch } from "react-icons/bs";
import beWisely from "../../assets/navbar/beWisely.png"
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={'white'} px={10}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Flex gap={5}>
            <IconButton icon={<BsSearch />} fontSize={'2xl'} aria-label={'search'} _hover={{ bg: 'transparent' }} bg={'transparent'} />
            <IconButton icon={<BsBell />} fontSize={'2xl'} aria-label={'notifications'} _hover={{ bg: 'transparent' }} bg={'transparent'} />
          </Flex>
          <Image src={beWisely} alt={'beWisely logo'} w={200} />
          <Flex alignItems={'center'} gap={5}>
            <IconButton icon={<BsHeart />} fontSize={'2xl'} aria-label={'notifications'} _hover={{ bg: 'transparent' }} bg={'transparent'} />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  bg={'#FFBD15'}
                // src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>

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
                    <Text>Username</Text>
                  </Center>
                </Box>
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}