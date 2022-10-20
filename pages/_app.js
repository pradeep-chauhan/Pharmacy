import '../styles/globals.css'
import '../design/common.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from 'react'
import '../design/infrastructure.css'
import '../design/common.css'
import '../design/homepage.css'
import '../design/svg.css'
import '../design/whyUs.css'
import '../design/info.css'
import '../design/careerpath.css'
import '../design/media.css'
import '../design/courses.css'
import '../design/gallery.css'
import '../design/offer.css'
import '../design/faculties.css'
import '../design/testimonial.css'
import '../design/contactUs.css'
import '../design/footer.css'
import '../design/mediaQuery.css'
import '../design/floatingIcon.css'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
