import Link from 'next/link'
import Layout from "./layout/layout";
import TimelineItem from "../components/TimelineItem";
import {dataTimeLine} from "../data/DataTimeLine";

const Timeline = () => {
  return (
    <Layout id="timeline">
      <section className="container inner">
        <h1 className="page-title">Timeline</h1>
        <div className="timeline">
          <ul>
            {
              dataTimeLine.length > 0 && dataTimeLine.map((item,idx) => {
                return <TimelineItem title={item.work} detail={item.detail} time={item.time} spotlight={item.spotlight} key={idx} />
              }) 
            }
            <div style={{clear:'both'}}></div>
          </ul>
        </div>
          <Link href="/porfolio">
            <button className="continue-button" >Continue to my Porfolio</button>
          </Link>
      </section>
    </Layout>
  );
}

export default Timeline;
