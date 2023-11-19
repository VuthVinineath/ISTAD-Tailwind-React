import React, { useEffect, useState } from "react";
import CardDetail from "../../components/common/card/CardDetail";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProducts] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setProducts(location.state);
    }
  }, []);
  return (
    <div>
      {product && (
        <CardDetail
          title={product.title}
          description={product.description}
          image={product.images[0]}
        />
      )}
    </div>
  );
}
