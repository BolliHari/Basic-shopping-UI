import React,{useState} from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Collection from '../Components/Collection';
import Footer from '../Components/Footer';
import { Gents , Ladies } from '../data';
import WomenCollection from '../Components/womenCollection';

const MainPage = () => {
  const [GentsFashion,setGentsFanshion] = useState(Gents);
  const [LadiesFashion,setLadiesFanshion] = useState(Ladies);
  console.log(GentsFashion);
  return (
    <div>
      <Header />
      <Banner />
      <Collection GentsFashion={GentsFashion}/>
      <WomenCollection LadiesFashion={LadiesFashion}/>
      <Footer />
    </div>
  )
}
export default MainPage
