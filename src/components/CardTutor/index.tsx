import { Flex, Text, Box, Image, Avatar, Heading, Badge, IconButton } from "@chakra-ui/react"
import { useState } from "react"
import { Rating } from "react-simple-star-rating"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const CardTutor = () => {
  const [rating, setRating] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
  }
  return (
    <Box >
      <Flex w={'100%'}>
        <Box bg={'#051829'} borderRadius={'3xl'} px={8} py={7} w={'80%'} mx={'auto'} minW={'900px'} >
          <Flex gap={5} direction={['column', 'column', 'row']}>
            <Flex direction="column" justifyContent="center" alignItems="center" gap={3}>
              <Avatar size={'2xl'} border={'solid'} />
              <Text color={'#fff'}>Nome do Tutor</Text>
              <Box bg={'#fff'} borderRadius="full" px={3} py={1} >
                <Rating
                  size={30}
                  SVGstyle={{ display: '-webkit-inline-box' }}
                  onClick={handleRating}
                />
              </Box>
            </Flex>
            <Flex direction={'column'} gap={3} >
              <Flex gap={5} alignItems={'center'} justifyContent="space-between" direction={['column', 'column', 'row']}>
                <Flex gap={3}>
                  <Box bg={'#575757'} borderRadius="xl" py={1} px={3}>
                    <Heading fontFamily={'Lato'} color={'#fff'} fontSize={'2xl'} textAlign="center">200</Heading>
                    <Text color={'#fff'} fontFamily={'Lato'} textAlign="center">Seguidores</Text>
                  </Box>
                  <Box bg={'#8497B2'} borderRadius="xl" py={1} px={3} minW={'100px'}>
                    <Heading fontFamily={'Lato'} color={'#fff'} fontSize={'2xl'} textAlign="center">300</Heading>
                    <Text color={'#fff'} fontFamily={'Lato'} textAlign="center">Aulas</Text>
                  </Box>
                </Flex>
                <Flex gap={3} justifyContent="center" alignItems="center">
                  <Badge colorScheme='green' py={1} px={2} borderRadius="full">Paciente</Badge>
                  <Badge colorScheme='blue' py={1} px={2} borderRadius="full">Inteligente</Badge>
                  <Badge colorScheme='red' py={1} px={2} borderRadius="full">Dedicado</Badge>
                  <Badge colorScheme='orange' py={1} px={2} borderRadius="full">Pontual</Badge>
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
              <Text color={'#fff'} fontSize={'3xl'}>Lorem ipsum dolor sit amet consectetur</Text>
              <Text color={'#fff'} >
                The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}