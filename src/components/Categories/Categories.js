import React, { useState, useEffect } from "react";
import CategoriesItem from "./CategoriesItem";
import { Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const Categories = () => {
  // get all categories
  const [categories1, setCategories] = useState([
    {
      id: 1,
      name: "Pasta",
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
    },
    {
      id: 2,
      name: "Vlees",
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png",
    },
    {
      id: 3,
      name: "Vis",
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png",
    },
    {
      id: 4,
      name: "Soep",
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
    },
  ]);

  const [categories, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9011/menu/categories")
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // get category by ID
  const [category, setItems1] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:9011/menu/categories/${id}`)
      .then((res) => {
        console.log(res);
        setItems(res.category);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // create category
  useEffect(() => {
    axios
      .post("http://localhost:9011/menu/categories/create", category)
      .then((res) => {
        console.log(res);
        console.log(category);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // update category
  useEffect(() => {
    axios
      .put("http://localhost:9011/menu/categories/update", category)
      .then((res) => {
        console.log(res);
        console.log(category);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Container>
        <Row>
          {categories1.map((categorie) => (
            <Col className="Column" sm={4}>
              <CategoriesItem
                Name={categorie.name}
                ImageLink={categorie.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
