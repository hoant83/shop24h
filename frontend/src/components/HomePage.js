import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import Footer from "./footer/Footer"
import HomepageContent from "./content/HomepageContent"
import { Container } from 'react-bootstrap';


function Homapage({user}) {
  return (
    <div >
      <Header user={user}/>
      <br></br>
      <br></br>
      <br></br>
      <HomepageContent/>
      <br></br>
      <Footer/>
    </div>
  );
}

export default Homapage;
