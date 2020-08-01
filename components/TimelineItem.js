
const TimelineItem = (props) => {
  const {title, detail, time,spotlight} = props;
  return (
    <li>
      <div className="content">
        <h6 className={`${spotlight ? 'spotlight' : ''}`}>{title}</h6>
        <p>{detail}</p>
      </div>
      <div className="time">
        <p>{time}</p>
      </div>
    </li>
  );
};

export default TimelineItem;
