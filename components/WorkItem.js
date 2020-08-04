const WorkItem = (props) => {

  const {title,skill} = props;
  
  return (  
    <div className="skill-item">
      <h6>{title}</h6>
      <div className="row">
        {
          skill.length > 0 && skill.map((item,idx) => {
            return (
            <div className="col-4 col-md-2" key={idx}>
              <div className="lang-item">
                <img className="img-fluid lang-img" loading="lazy" src={`/static/languages/${item.image}`}></img>
                <div className="desc">{item.name}</div>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default WorkItem;