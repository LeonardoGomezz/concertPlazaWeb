import { ArtistList } from "@/components/home/ArtistList";
import { Header } from "@/components/home/Header";
import { Main } from "@/components/layout/Main";

export default function Home() {
  return (
   <Main>
   <Header/>
   <ArtistList/>
   </Main>
  );
}
