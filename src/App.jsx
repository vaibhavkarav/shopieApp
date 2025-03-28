import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export const productsData = [
  {
    id: 1,
    name: "Smartphone",
    description: "Description of Smartphone",
    price: 500,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 2,
    name: "Laptop",
    description: "Description of Laptop",
    price: 1200,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Description of Headphones",
    price: 100,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 4,
    name: "Tablet",
    description: "Description of Tablet",
    price: 300,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 5,
    name: "Camera",
    description: "Description of Camera",
    price: 800,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 6,
    name: "Monitor",
    description: "Description of Monitor",
    price: 600,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 7,
    name: "Smartwatch",
    description: "Description of Smartwatch",
    price: 250,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 8,
    name: "Printer",
    description: "Description of Printer",
    price: 350,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 9,
    name: "Speaker System",
    description: "Description of Speaker System",
    price: 400,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
  {
    id: 10,
    name: "Wireless Router",
    description: "Description of Wireless Router",
    price: 80,
    productImg1: "https://placehold.co/200x200?text=Image+1",
    productImg2: "https://placehold.co/200x200?text=Image+2",
    productImg3: "https://placehold.co/200x200?text=Image+3",
  },
];

function App() {
  return (
    <>
      <Header />
      <main className="container p-4">
        <section className="d-flex justify-content-center">
          <img
            src="https://placehold.co/1200x400"
            alt="Shop img"
            className="img-fluid"
          />
        </section>

        <section className="d-flex justify-content-center text-center mt-3">
          <div>
            <h3>Shopie</h3>
            <p>Welcome to the Shopie application!</p>
            <Link className="btn btn-primary" to={"/products"}>
              Browse Products
            </Link>
          </div>
        </section>

        <section className="d-flex justify-content-center text-center mt-5">
          <div>
            <h3>Trending</h3>
            <p className="mb-4">Checkout our trending products</p>
            <div className="row g-5">
              <div className="col-md-4">
                <img
                  src="https://placehold.co/300x300"
                  alt="Trending product"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="https://placehold.co/300x300"
                  alt="Trending product"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <img
                  src="https://placehold.co/300x300"
                  alt="Trending product"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
