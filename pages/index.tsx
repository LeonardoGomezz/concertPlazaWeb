import { ArtistList } from "@/components/home/ArtistList";
import { Banner } from "@/components/home/Banner";
import { Header } from "@/components/home/Header";
import { Investment } from "@/components/home/Investment";
import { Main } from "@/components/layout/Main";

export default function Home() {
  return (
   <Main>
   <Header/>
   <ArtistList/>
   <Investment/>
   <Banner/>
   </Main>
  );
}
