import './App.css'
import { styled } from "linaria/react";
import Layout from "common/src/components/TestLayout"

const Title = styled.h1`
  color: pink;
`;

function App() {
  return (
    <Layout>
      <Title>Hello</Title>
    </Layout>
  )
}

export default App
