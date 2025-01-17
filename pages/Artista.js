import { Artista } from "@/sections"
import Head from "next/head"
export const metadata = {
  title: "Mi tienda",
  description: "mi tienda la lola",

}
const ArtistaPagina = () => {
  return (
    <>
      <Head>
        
        <title>Artista - Mariana Arias</title>
        
      </Head>
      <Artista />
    </>
  )
}

export default ArtistaPagina
