import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (


    <footer class="footer">

      <div>
        <FontAwesomeIcon icon="fa-brands fa-github" />
        <p>&copy; 2022 Joakim Eineving</p>
      </div>
    </footer>
  )
}

export default Footer