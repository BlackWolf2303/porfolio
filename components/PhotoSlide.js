
const PhotoSlide = (props) => {
  const {caption,img, detail} = props;
  return (
    <div>
    {
      img ?
        <div className="card">
          <figure>
            <img className="card-img-top img-fluid" src={`/static/photos/${img}`} alt="Card image cap"/>
          </figure>
          <div className="card-body">
            <h6>{caption}</h6>
            <p className="card-text">{detail}</p>
          </div>
        </div> 
        :
        <div className="card et-cetera">
          <h6>{caption}</h6>
        </div>

    }
  </div>
  );
};

export default PhotoSlide;