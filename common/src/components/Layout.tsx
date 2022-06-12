import React, { PropsWithChildren } from "react";
import { styled } from "linaria/react";
import "../global.css";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background: wheat;
`;

const SideNav = styled.nav`
  width: 60px;
  background: steelblue;
  z-index: 1;

`;

const Brand = styled.div`
  width: 60px;
  height: 60px;
  background: darkslategray;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    border-top: 30px solid #61dafb;
    border-right: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 30px solid #61dafb;
    opacity: .2;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  background: burlywood;
`;

const PageContainer = styled.div`
  width: 100%;
  flex: 1 1 100%;
`;

const Title = styled.h1`
  color: deeppink;
  position: relative;
  font-size: 55px;

  &:before {
    content: "Hello";
    color: #ffd0d7;
    position: absolute;
    top: 2px;
    right: 3px;
    font-size: 55px;
  }
`;

export type LayoutProps = PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <SideNav><Brand /></SideNav>
      <ContentContainer>
        <Header><Title>Hello</Title></Header>
        <PageContainer>
          {children}
        </PageContainer>
      </ContentContainer>
    </Container>
  );
}
