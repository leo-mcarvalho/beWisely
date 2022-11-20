import { Box, Divider, Text, Flex, IconButton, Input, InputGroup, InputLeftElement, Link } from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react";
import { toJS } from "mobx";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { CardTutor } from "../../components/CardTutor";
import { NavBar } from "../../components/Navbar";
import { SearchStore } from "../../stores/searchStore";
import { makeData } from "../../utils/makeData";
import { BookingModal } from "../../components/BookingModal";

export const SearchResultPage = observer(() => {
  const store = useLocalObservable(() => new SearchStore());
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q")
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    if (query && query != searchText) {
      store.getTutorsByQuery(query)
      setSearchText(query);
    }
  }, [])

  return (
    <Box>
      <NavBar />
      <Flex gap={10} direction={'column'} >
        <Flex bg={'#0A2640'} h={'15vh'} justifyContent={'center'} alignItems="center" >
          <Flex gap={5} mx={'20vw'} >
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<RiSearchLine color='gray.300' />}
              />
              <Input type='text' placeholder='Pesquisar' bg={'white'} borderRadius={'full'} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </InputGroup>
            <IconButton icon={<RiSearchLine />} aria-label={"Pesquisar"} borderRadius={'full'}
              onClick={() => { searchText != '' && searchText != store.actualQuery ? store.getTutorsByQuery(searchText) : '' }} />
          </Flex>
        </Flex>
        <Text fontSize={'xl'} textAlign={'center'}>Tutores capacitados no tema escolhido</Text>
        <Divider />
        <Box>
          <Box>
            {store.tutors.map((tutor, index) => {
              return (

                <Box my={2} key={index}>
                  <BookingModal key={index} name={tutor.name} rating={tutor.rating} followers={tutor.followers} classes={tutor.classes} badges={tutor.badges} presentation={{
                    title: tutor.presentation.title,
                    description: tutor.presentation.description,
                  }} />
                </Box>
              )
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
})