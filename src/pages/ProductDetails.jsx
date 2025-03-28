import { useParams } from "react-router-dom";
import { productsData } from "../App";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const productId = useParams();

  const product = productsData.find(
    (product) => product.id === Number(productId.productId)
  );

  console.log(product);
  return (
    <>
      <Header />
      <main className="container p-4 mt-3">
        <div className="card mb-5">
          <div className="card-body">
            <h3 className="card-title mb-3">Product Details</h3>
            <div className="row mb-3">
              <div className="col-md-2 me-5 mb-2">
                <img
                  src={product.productImg1}
                  alt="Product 1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-2 me-5 mb-2">
                <img
                  src={product.productImg2}
                  alt="Product 2"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-2">
                <img
                  src={product.productImg3}
                  alt="Product 3"
                  className="img-fluid"
                />
              </div>
            </div>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: INR {product.price}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
