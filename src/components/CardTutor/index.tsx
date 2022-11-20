import { Flex, Text, Box, Image, Avatar, Heading, Badge, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { Rating } from "react-simple-star-rating"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Tutor } from "../../utils/makeData";

export const CardTutor = (tutorObj: Tutor) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Box >
      <Flex w={'100%'}>
        <Box bg={'#051829'} borderRadius={'3xl'} px={8} py={7} w={'80%'} mx={'auto'} minW={'900px'} >
          <Flex gap={5} direction={['column', 'column', 'row']}>
            <Flex direction="column" justifyContent="center" alignItems="center" gap={3}>
              <Avatar size={'2xl'} border={'solid'} />
              <Text color={'#fff'}>{tutorObj.name}</Text>
              <Box bg={'#fff'} borderRadius="full" px={3} py={1} >
                <Rating
                  size={30}
                  initialValue={tutorObj.rating}
                  SVGstyle={{ display: '-webkit-inline-box' }}
                  readonly
                />
              </Box>
            </Flex>
            <Flex direction={'column'} gap={3} >
              <Flex gap={5} alignItems={'center'} justifyContent="space-between" direction={['column', 'column', 'row']}>
                <Flex gap={3}>
                  <Box bg={'#575757'} borderRadius="xl" py={1} px={3}>
                    <Heading fontFamily={'Lato'} color={'#fff'} fontSize={'2xl'} textAlign="center">{tutorObj.followers}</Heading>
                    <Text color={'#fff'} fontFamily={'Lato'} textAlign="center">Seguidores</Text>
                  </Box>
                  <Box bg={'#8497B2'} borderRadius="xl" py={1} px={3} minW={'100px'}>
                    <Heading fontFamily={'Lato'} color={'#fff'} fontSize={'2xl'} textAlign="center">{tutorObj.classes}</Heading>
                    <Text color={'#fff'} fontFamily={'Lato'} textAlign="center">Aulas</Text>
                  </Box>
                </Flex>
                <Flex gap={3} justifyContent="center" alignItems="center">
                  <Badge colorScheme='green' py={1} px={2} borderRadius="full">{tutorObj.badges[0]}</Badge>
                  <Badge colorScheme='blue' py={1} px={2} borderRadius="full">{tutorObj.badges[1]}</Badge>
                  <Badge colorScheme='red' py={1} px={2} borderRadius="full">{tutorObj.badges[2]}</Badge>
                  <Badge colorScheme='orange' py={1} px={2} borderRadius="full">{tutorObj.badges[3]}</Badge>
                </Flex>
                <IconButton
                  icon={isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                  aria-label={"favorite"}
                  variant="unstyled"
                  color={'#fff'}
                  fontSize={'4xl'}
                  onClick={() => setIsFavorite(!isFavorite)}
                />
              </Flex>
              <Text color={'#fff'} fontSize={'3xl'}>{tutorObj.presentation.title}</Text>
              <Text color={'#fff'} >{tutorObj.presentation.description}</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}