
const PorforlioItem = (props) => {
  const {project,img, detail, responsibility} = props;
  return (
    <div className="col-md-6">
    {
      img ?
        <div className="card">
          <figure>
            <img className="card-img-top img-fluid" src={`/static/project/${img}`} alt="Card image cap"/>
          </figure>
          <div className="card-body">
            <h6>{project}</h6>
            <p className="card-text">{detail}</p>
            <p className="card-text">Responsibility: {responsibility}</p>
          </div>
        </div> 
        :
        <div className="card et-cetera">
          <h6>{project}</h6>
        </div>

    }
  </div>
  );
};

export default PorforlioItem;