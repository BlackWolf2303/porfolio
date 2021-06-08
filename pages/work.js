import Link from 'next/link'
import Layout from "./layout/layout";
import WorkItem from "../components/WorkItem";
import {dataWorkItem} from "../data/DataTimeLine";

const Work = () => {
  return (
    <Layout id="work">
      <section className="container inner">
        <h1 className="page-title">Work</h1>
        <div className="work-desc-wrapper">
          <div className="row">
            <div className="col-md-12">
              <p className="desc">In few years, I have been programming the projects from the Europe and Asia marketplaces, understand how they work. I like to code things from the designs, or even from the sketches, wireframes where I enjoy bringing ideas to life in the browser. Have been enjoyed the multicultural team together, with so nice colleagues from many countries helped me upgrade skills, and understand how different working styles which will help me the next journey.<br/><br/>
              If you ask me do I have any awards? or achievements? or be a competition winner before? I would say I have nothing for now. 
              The big achievement of mine is when I look back every single day at night, learn from my own mistakes, and see myself be better 1% every day.
              </p>
            </div>
          </div>
          <div className="work-list">
          {
            dataWorkItem.length>0 && dataWorkItem.map((item,idx) => {
              return <WorkItem title={item.title} skill={item.skill} key={idx}/>
            })
          }
            <div className="skill-item">
              <h6>Others:</h6>
              <p>Npm, Git, Gulp, Photoshop, Sketch, MacOs...</p>
            </div>
            <div className="skill-item">
              <h6>Languages:</h6>
              <p>English and Vietnamese</p>
            </div>
          </div>
          <Link href="/timeline">
            <button className="continue-button" >Continue to my Timeline</button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default Work;
