import Link from 'next/link'
import Layout from "./layout/layout";
import PorforlioItem from "../components/PorforlioItem";

import {dataPorforlioItem} from "../data/DataTimeLine";


const Porfolio = () => {
  return (
    <Layout id="porfolio">
      <section className="container inner">
        <h1 className="page-title">Porfolio</h1>
        <p className="subtitle">"Because a picture is worth a thousand words."</p>
        <div className="row">
          {
            dataPorforlioItem.length>0 && dataPorforlioItem.map((item,idx) => {
              return <PorforlioItem project={item.project} img={item.img} detail={item.detail} responsibility={item.responsibility} key={idx}/>
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
export default Porfolio;