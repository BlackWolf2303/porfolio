
const Footer = (props) => {
  return (
    <div className="copy-right">
      <p>Powered by <a href="/">Myself</a>, inspired by some blogs and the <a href="https://medium.muz.li/best-practices-for-minimalist-website-design-9e8ea07e17c2">Minimalism</a></p>
      <p>Copyright &copy;{new Date().getFullYear()} - Programming by <a href="https://nextjs.org/" target="_blank">NextJs</a></p>
    </div>
  );
};

export default Footer;
