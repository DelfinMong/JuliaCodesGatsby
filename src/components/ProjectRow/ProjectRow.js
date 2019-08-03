import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../Media";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
  }
`;

const Project = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 90px;

  :nth-child(1) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 10%;
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  border-radius: 4px;
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
  }
`;

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;

  :hover {
    border-bottom: 2px solid black;
  }

  span {
    font-size: 20px;
  }
`;

function ProjectRow() {
  return (
    <ProjectContainer>
      <Project>
        <Link to="/Forecast">
          <ProjectImage />
        </Link>
        <Link to="/Forecast">
          <SubHeading>Forecast</SubHeading>
        </Link>
        <ProjectParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          pretium magna.
        </ProjectParagraph>
        <Link to="/Forecast">
          <ProjectLink>
            Read Explanation <span>&#8250;</span>
          </ProjectLink>
        </Link>
      </Project>
      <Project>
        <Link to="">
          <ProjectImage />
        </Link>
        <Link to="">
          <SubHeading>Forecast</SubHeading>
        </Link>
        <ProjectParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          pretium magna.
        </ProjectParagraph>
        <Link as="">
          <ProjectLink>
            Read Explanation <span>&#8250;</span>
          </ProjectLink>
        </Link>
      </Project>
    </ProjectContainer>
  );
}

export default ProjectRow;
