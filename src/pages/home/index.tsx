import { Box, Flex, Text, Image, Button, VStack, IconButton } from "@chakra-ui/react"
import { NavBar } from "../../components/Navbar"
import books from "../../assets/homePage/1 - books.svg"
import student from "../../assets/homePage/2 - student.svg"
import rocket from "../../assets/homePage/3 - rocket.svg"
import computer from "../../assets/homePage/4 - computer.svg"
import chating from "../../assets/homePage/5 - chating.svg"
import talking from "../../assets/homePage/6 - talking.svg"
import { FcSearch } from "react-icons/fc";
import { Footer } from "../../components/Footer"


export const HomePage = () => {
    return (
        <Box h={'100%'}>
            <Flex as={'section'} bg={'#0A2640'} h={'100vh'} direction={'column'}>
                <NavBar />
                <Flex m={'auto'} alignContent='center' justifyContent={'center'} gap={5}>
                    <Box w={'40vw'}>
                        <Box as={'article'} mb={10}>
                            <Text fontSize={'sm'} mb={5} fontWeight={800} color={'#FBD784'} letterSpacing={'6px'} textTransform={'uppercase'}>
                                where you go is the key
                            </Text>
                            <Text fontSize={'5xl'} fontWeight={200} color={'#ffffff'} mb={5}>
                                Understand Your Map & Timing
                            </Text>

                            <Text fontFamily={'lato'} color={'#ffffff'}>
                                To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction...
                            </Text>
                        </Box>
                        <Button leftIcon={<FcSearch />} variant='outline' fontFamily={'lato'} color={'#ffffff'} aria-label={"search"}
                            _hover={{ bg: 'transparent', borderColor: '#FBD784', color: '#FBD784' }}>
                            Pesquisar Aulas
                        </Button>
                    </Box>
                    <Image src={books} boxSize={'md'} w={'40vw'} maxW={'40vw'} />
                </Flex>
            </Flex>

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
                                We are commited.
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
                                We are commited.
                            </Text>
                            <Text color={'#ffffff'}>
                                Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Footer />
        </Box>
    )
}

