import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Osama Shahid <br />
          Software Engineer
        </SectionTitle>
        <SectionText>
          I am interested in building Full Stack applications and continually improving my skills as a software developer.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;