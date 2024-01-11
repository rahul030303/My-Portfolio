import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:705-602-0648">821-859-2530</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rahulsingh10041998@gmail.com">
            rahulsingh10041998@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons  target={"_blank"} href="https://github.com/singhrahul03g">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target={"_blank"} href="https://www.linkedin.com/in/rahul-aka-sabal/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target={"_blank"} href="https://www.instagram.com/rahul_aka_sabal/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
