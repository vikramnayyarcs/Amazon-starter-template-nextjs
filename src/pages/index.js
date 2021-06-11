import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import PersonalFooter from "../components/PersonalFooter";
import FooterOne from "../components/FooterOne";
import FinalFooter from "../components/FinalFooter";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";



export default function Home({products}) {
  //console.log(products);

  return (
    <div className="bg-gray-100 rounded-1-md scrollbar-hide">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header/>

      <main className="max-w-screen-2xl mx-auto ">
        <Banner/>
        <ProductFeed products={products}/>
        <PersonalFooter/>
        <BackToTop/>
        <FooterOne/>
        <FinalFooter/>
        <Copyright/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());

  return {
    props: {
      products
    }
  }
}

//GET: https://fakestoreapi.com/products .