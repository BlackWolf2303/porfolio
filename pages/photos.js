import Layout from "./layout/layout";

const Photos = () => (
  <Layout id="photos">
    <section className="container inner">
      <h1 className="page-title">Photos</h1>
      <p>make yourself better 1% everyday</p>
      <div className="row">
        <div className="col-md-4">
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
        <div className="col-md-4">
          {/* <figure>
            <img className="img-fluid" src="/static/big-o.jpg" alt=""></img>
          </figure> */}
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
        <div className="col-md-4">
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
        <div className="col-md-4">
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
        <div className="col-md-4">
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
        <div className="col-md-4">
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
        <div className="col-md-4">
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
        <div className="col-md-4">
          <figure>
            <img className="img-fluid" src="/static/IMG_E3103.jpg" alt=""></img>
          </figure>
        </div>
      </div>


    </section>
  </Layout>
);

export default Photos;
