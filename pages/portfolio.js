import Link from 'next/link'
import Layout from "./layout/layout";
import PortfolioItem from "../components/PortfolioItem";

import {dataPortfolioItem} from "../data/DataTimeLine";


const Portfolio = () => {
  return (
    <Layout id="portfolio">
      <section className="container inner">
        <h1 className="page-title">Portfolio</h1>
        <p className="subtitle">"Because a picture is worth a thousand words."</p>
        <div className="row">
          {
            dataPortfolioItem.length>0 && dataPortfolioItem.map((item,idx) => {
              return <PortfolioItem project={item.project} img={item.img} detail={item.detail} responsibility={item.responsibility} key={idx}/>
            })
          }
        </div>
        <Link href="/photos">
          <button className="continue-button" >Continue to my Photos</button>
        </Link>
      </section>
    </Layout>
  );
}
export default Portfolio;