import { useDisclosure, Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, theme, Divider } from "@chakra-ui/react"
import { setDate } from "date-fns"
import moment from "moment"
import React, { useState } from "react"
import { Tutor } from "../../utils/makeData"
import { CardTutor } from "../CardTutor"
import { SingleDatepicker } from "../Datepicker"

export const BookingModal = (tutor: Tutor) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const [date, setDate] = useState(new Date());
  const [initHour, setInitHour] = useState('8:00');
  const [endHour, setEndHour] = useState('9:00');
  const [theme, setTheme] = useState('');
  const [privateClass, setPrivateClass] = useState(false);

  return (
    <>
      <Box onClick={onOpen} _hover={{ cursor: 'pointer' }}>
        <CardTutor name={tutor.name} rating={tutor.rating} followers={tutor.followers} classes={tutor.classes} badges={tutor.badges} presentation={{
          title: tutor.presentation.title,
          description: tutor.presentation.description,
        }} />
      </Box>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={'3xl'} isCentered >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agendar Aula</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <Flex justifyContent='center' alignContent='center' m={'5'} gap={10} direction={['column', 'column', 'row']}>
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
                  <Heading textAlign={'center'} mb={3}>Resumo</Heading>
                  <Box w={['40vw', '30vw', '20vw']}>
                    <Text>{`Aula ${privateClass ? 'particular' : 'comum'} com o monitor
                      ${tutor.name}, sobre ${theme} das ${initHour}h às ${endHour}h no dia ${moment(date).format('DD/MM/YYYY')}`}
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
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}