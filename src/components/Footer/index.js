import React from 'react';
import { StyledFooter, StyledPrivacyPolicy, StyledFooterDescription, StyledFooterBottom } from './StyledFooter.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterDescription>
        <p>
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>
        <p>© 2022 Published by studio Milk</p>
      </StyledFooterDescription>
      <StyledFooterBottom>
        <StyledPrivacyPolicy>Privacy Policy</StyledPrivacyPolicy>
        <p>info@backstagetalks.com</p>
      </StyledFooterBottom>
    </StyledFooter>
  );
}
