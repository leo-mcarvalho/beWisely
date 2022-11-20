import { Box, Flex, Text, Image, Button, VStack, IconButton } from "@chakra-ui/react"
import { NavBar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { Presentation } from "./Presentation"
import { Explanation } from "./Explanation"
import { OurValues } from "./OurValues";


export const HomePage = () => {
    return (
        <Box h={'100%'}>
            <Flex as={'section'} bg={'#0A2640'} h={'100vh'} direction={'column'}>
                <NavBar />
                <Presentation />
            </Flex>
            <Explanation />
            <OurValues />
            <Footer />
        </Box>
    )
}

