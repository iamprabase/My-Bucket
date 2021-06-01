import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { ProductScreen } from './screens/ProductScreen'
import { CartScreen } from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-2">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:_id" exact component={ProductScreen} />
          <Route path="/cart/:_id?" exact component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App
