import React, { useEffect, useState } from "react";
import CardComponent from "../../components/common/card/CardComponent";
import PlaceHolderComponent from "../../components/common/card/PlaceHolderComponent";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Home() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  // const [error, setError] = useState({
  //   name: "",
  //   message: "",
  // });
  // useEffect(() => {
  //   if (password.length < 8 && password.length > 0) {
  //     setError({
  //       name: "password",
  //       message: "Password must be at least 8 characters",
  //     });
  //   } else {
  //     setError({
  //       name: "",
  //       message: "",
  //     });
  //   }
  // }, [password]);

  const handleClickCard = (item) => {
    navigation("/detail", { state: item });
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  }, []);

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <div className="flex flex-wrap justify-center">
      {loading &&
        [1, 2, 3, 4, 5, 6].map((item, index) => (
          <PlaceHolderComponent key={index} />
        ))}
      {!loading &&
        products.map((item, index) => (
          <CardComponent
            key={index}
            onClick={() => {
              handleClickCard(item);
            }}
            title={item.title}
            price={item.price}
            image={item.images[0]}
          />
        ))}
    </div>
  );
}
