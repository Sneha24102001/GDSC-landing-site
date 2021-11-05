import React from 'react';
import { AboutObjOne, AboutObjTwo} from './data';
import { InfoSection,Profile} from '../../components';

function About() {
  return (
    <>
      <InfoSection {...AboutObjOne} />
      <InfoSection {...AboutObjTwo} />
      <Profile />
      
    </>
  );
}
export default About;

