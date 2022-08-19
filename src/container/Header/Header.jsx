import React from 'react';
import './Header.scss';
import AnimatedLetters from '../../components/AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { motion} from 'framer-motion';


const Header = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'J', 'o', 'a', 'k', 'i', 'm', ',']
    const jobArray = [
      'I',
      'T',
      ' ',
      'S',
      't',
      'u',
      'd',
      'e',
      'n',
      't',
      '.',
    ]
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => {
            clearTimeout(timeoutId)}}, [])
  return (
      <>
    <section>
    
    <div className="container-header home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>
                    {/* <img src={LogoTitle} alt="developer" /> */}
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray} 
                    idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray} 
                    idx={22} />
                </h1>
                    <h2>Frontend Developer / Backend Developer / Photographer</h2>
                    {/* <Link to="" className='flat-button'>CONTACT ME</Link> */}

            </div>
            <svg class="arrows">
				<path class="a1" d="M0 0 L30 32 L60 0"></path>
				<path class="a2" d="M0 20 L30 52 L60 20"></path>
				<path class="a3" d="M0 40 L30 72 L60 40"></path>
			</svg>
        </div>
        
        </section>

        </>
  )
}

export default Header;