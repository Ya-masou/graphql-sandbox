import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "urql"
import { client } from "@/lib/urql"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
