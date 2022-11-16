import { Flex, IconButton, Text, Image, Box, Heading, FormControl, FormLabel, Select, Input, Checkbox, Button } from "@chakra-ui/react"
import { NavBar } from "../../components/Navbar"
import { BiChevronLeft } from "react-icons/bi";
import hand from "../../assets/bookingPage/1 - hand.svg"
import { SingleDatepicker } from "../../components/Datepicker";
import { useState } from "react";
import { CardTutor } from "../../components/CardTutor";

export const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const [initHour, setInitHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [theme, setTheme] = useState('');
  const [privateClass, setPrivateClass] = useState(false);
  return (
    <Flex as={'section'} bg={'#0A2640'} h={['100%', '100%', '100vh']} w={'100%'} direction={'column'}>
      <NavBar />
      <Flex alignItems='center'>
        <IconButton icon={<BiChevronLeft />} bg={'transparent'} color={'white'} fontSize={'50'} aria-label={"Back"} alignSelf={'flex-start'} m={5} />
        <Heading color='white' fontSize={'4xl'} my={5} mx={'auto'} textAlign='center'>Understand Your Map & Timing</Heading>
      </Flex>
      <Flex m={'auto'} alignContent='center' justifyContent={'center'} gap={5} direction='column' w={'100%'}>
        <Box borderRadius={'3xl'} bg={'white'} mx={'auto'}  >
          <Flex justifyContent='center' alignContent='center' m={'10'} gap={10} direction={['column', 'column', 'row']}>
            <Flex as={'form'} direction='column' gap={3}>
              <FormControl>
                <FormLabel>Selecione a data</FormLabel>
                <SingleDatepicker onChange={(newDate) => setDate(newDate as Date)} value={date} />
              </FormControl>
              <FormControl>
                <FormLabel>Horário de início</FormLabel>
                <Select value={initHour} onChange={(e) => setInitHour(e.target.value)}>
                  <option value='8:00'>8:00</option>
                  <option value='9:00'>9:00</option>
                  <option value='10:00'>10:00</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Horário de término</FormLabel>
                <Select value={endHour} onChange={(e) => setEndHour(e.target.value)}>
                  <option value='8:00'>8:00</option>
                  <option value='9:00'>9:00</option>
                  <option value='10:00'>10:00</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Tema da aula</FormLabel>
                <Input onChange={(e) => setTheme(e.target.value)} value={theme} />
              </FormControl>
              <FormControl >
                <Flex alignItems="center" gap={3}>
                  <Checkbox size={'lg'} onChange={(e) => setPrivateClass(e.target.checked)} checked={privateClass} />
                  <Text as={'label'}>Aula Particular ?</Text>
                </Flex>
              </FormControl>
            </Flex>
            <Box bg={'#F1F1F1'} borderRadius={'3xl'} p={'2vw'} >
              <Flex direction='column' justifyContent={'space-between'} alignItems='center' gap={5} >
                <Heading textAlign={'center'} mb={3}>Summary</Heading>
                <Box w={['40vw', '30vw', '20vw']}>
                  <Text>Aula particular com o monitor
                    H. Romeu Pinto, sobre lógica de programação das 14:00h às 16:00h no dia 27/07/2022
                  </Text>
                </Box>
                <Flex>
                  <Text>Total:</Text>
                  <Text>R$101,00</Text>
                </Flex>
                <Button bg={'#FFB905'} color={'#ffffff'} fontFamily={'Lato'} minW={'200px'} _hover={{ bg: '#ffc531' }}>Ir para o pagamento</Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <CardTutor />
      </Flex >
    </Flex >
  )
}