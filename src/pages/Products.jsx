import { Link } from "react-router-dom";
import { productsData } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products = () => {
  const productsListing = productsData.map((product) => (
    <li className="list-group-item">
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </li>
  ));
  return (
    <>
      <Header />
      <main className="container p-4">
        <h2 className="mb-3">Product List</h2>
        <ul className="list-group mb-5 col-md-6">{productsListing}</ul>
      </main>
      <Footer />
    </>
  );
};

export default Products;
