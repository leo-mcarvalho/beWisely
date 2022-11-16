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
  IconButton,
  Image,
  Text
} from '@chakra-ui/react';
import { BsBell, BsHeart, BsSearch } from "react-icons/bs";
import beWisely from "../../assets/navbar/beWisely.png"
import noData from "../../assets/noData.svg"
export const NavBar = () => {
  return (
    <>
      <Box bg={'white'} >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'} px={'3%'} m={'auto'}>
          <Flex gap={5}>
            <Link href={'/search'}>
              <IconButton variant="unstyled" icon={<BsSearch />} fontSize={'2xl'} aria-label={'search'} _hover={{ bg: 'transparent' }} bg={'transparent'} />
            </Link>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'unstyled'}
                cursor={'pointer'}
                minW={0}>
                <IconButton variant="unstyled" icon={<BsBell />} fontSize={'2xl'} aria-label={'notifications'} _hover={{ bg: 'transparent' }} bg={'transparent'} />
              </MenuButton>

              <MenuList alignItems={'center'}>
                <Box py={1}>
                  <Center >
                    <Text>Notificações</Text>
                  </Center>
                </Box>
                <MenuDivider />
                {/* <MenuItem><Avatar size={'sm'} />  Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem> */}
                <MenuItem ><Image src={noData} alt='no Data' boxSize={'100'} mx={'auto'} /></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Link href={'/'}>
            <Image src={beWisely} alt={'beWisely logo'} w={200} />
          </Link>
          <Flex alignItems={'center'} gap={5}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'unstyled'}
                cursor={'pointer'}
                minW={0}>
                <IconButton icon={<BsHeart />} fontSize={'2xl'} aria-label={'notifications'} _hover={{ bg: 'transparent' }} bg={'transparent'} />
              </MenuButton>

              <MenuList alignItems={'center'}>
                <Box py={1}>
                  <Center >
                    <Text>Favoritos</Text>
                  </Center>
                </Box>
                <MenuDivider />
                {/* <MenuItem><Avatar size={'sm'} />  Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem> */}
                <MenuItem ><Image src={noData} alt='no Data' boxSize={'100'} mx={'auto'} /></MenuItem>
              </MenuList>
            </Menu>

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