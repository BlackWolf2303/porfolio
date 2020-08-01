import Layout from "./layout/layout";
import PorforlioItem from "../components/PorforlioItem";

import {dataPorforlioItem} from "../data/DataTimeLine";


const Porfolio = () => {
  return (
    <Layout id="porfolio">
      <section className="container inner">
        <h1 className="page-title">Porfolio</h1>
        <p className="desc">"Because a picture is worth a thousand words."</p>
        <div className="row">
          {
            dataPorforlioItem.length>0 && dataPorforlioItem.map((item,idx) => {
              return <PorforlioItem project={item.project} img={item.img} detail={item.detail} responsibility={item.responsibility} key={idx}/>
            })
          }
        </div>
      </section>
    </Layout>
  );
}
export default Porfolio;