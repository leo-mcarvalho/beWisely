import { Flex, Button, Box, Text, Image } from "@chakra-ui/react"
import { FcSearch } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import books from "../../assets/homePage/1 - books.svg"

export const Presentation = () => {
  const navigate = useNavigate();
  return (
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
          onClick={() => navigate('/search')}
          _hover={{ bg: 'transparent', borderColor: '#FBD784', color: '#FBD784' }}>
          Pesquisar Aulas
        </Button>
      </Box>
      <Image src={books} boxSize={'md'} w={'40vw'} maxW={'40vw'} />
    </Flex>
  )
}