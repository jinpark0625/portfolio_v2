import React from "react";
import Link from "next/link";
import { ScrollFooter } from "./";
import { HeaderTitle, FooterText, Footer } from "../styledComponents";

const ProjectFooter = ({ link, background, title }) => {
  return (
    <Link href={link}>
      <a>
        <Footer background={background}>
          <ScrollFooter>
            <FooterText fontColor="#aaa" margin="0 0 10px 0">
              Next Project
            </FooterText>
            <HeaderTitle fontColor="#000" weight="600" fontFamily="SomeTimes">
              {title}
            </HeaderTitle>
          </ScrollFooter>
        </Footer>
      </a>
    </Link>
  );
};

export default ProjectFooter;
