import React, { PropsWithChildren } from "react";
import { styled } from "linaria/react";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background: wheat;
`;

const SideNav = styled.nav`
  width: 20px;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const PageContainer = styled.div`
  width: 100%;
  flex: 1 1 100%;
`;

export type LayoutProps = PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <SideNav />
      <ContentContainer>
        <Header/>
        <PageContainer>
          {children}
        </PageContainer>
      </ContentContainer>
    </Container>
  );
}
