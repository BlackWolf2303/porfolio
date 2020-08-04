import Link from 'next/link'

const MenuItem = (props) => {
  const { imgUrl,icon, title,href } = props;
  return ( 
    <li className="menu-item">
      <Link href={href}>
        <a className="active">
          {imgUrl !== `/static/sidebar/undefined` ? <span className="icon"><img src={imgUrl} /></span> : null}
          {icon ? <i className={icon} aria-hidden="true"></i> : null}
          <span className="name">{title}</span>
        </a>
      </Link>
    </li>
  );
}

export default MenuItem;