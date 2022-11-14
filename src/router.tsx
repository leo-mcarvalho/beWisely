import { Center, Spinner } from "@chakra-ui/react"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { BookingPage } from "./pages/Booking"
import { CreateAccountPage } from "./pages/CreateAccount"
import { HomePage } from "./pages/home"
import { LoginPage } from "./pages/Login"
import { SearchPage } from "./pages/Search"
import { SearchResultPage } from "./pages/SearchResult"

export const Router = () => {
  return (
    <Suspense
      fallback={
        <Center>
          <Spinner
            thickness='6px'
            speed='0.65s'
            emptyColor='gray.200'
            color='yellow.500'
            size='xl'
          />
        </Center>
      }>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/createaccount' element={<CreateAccountPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/search/:query' element={<SearchResultPage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </Suspense>
  )
}