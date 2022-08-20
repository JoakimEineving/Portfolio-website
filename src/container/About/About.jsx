import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'
import './About.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container-about'>hello</div>
    </>
    
  )
}

export default About


