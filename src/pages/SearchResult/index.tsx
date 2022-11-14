import { Box, Divider, Text, Flex, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/Navbar";

export const SearchResultPage = () => {
  const { query } = useParams<{ query: string }>();
  // const {data, error, isLoading} = useSearchResult(query);
  // if(isLoading) return <Loading/>;
  // if(error) return <Error/>;
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
              <Input type='text' placeholder='Pesquisar' bg={'white'} borderRadius={'full'} />
            </InputGroup>
            <IconButton icon={<RiSearchLine />} aria-label={"Pesquisar"} borderRadius={'full'} />
          </Flex>
        </Flex>
        <Text fontSize={'xl'} textAlign={'center'}>Tutores capacitados no tema escolhido</Text>
        <Divider />
      </Flex>
    </Box>
  )
}