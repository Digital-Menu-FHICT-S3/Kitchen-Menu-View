import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from 'axios';

const OrderItem = ({ id, title, tableNum, image, orderTime, onDoneClick }) => {

  const [DishesInOrder, setDishesInOrder] = useState([])
  const [Dishes, setDishes] = useState([])

  useEffect(() => {
    const fetchOrderLines = async () => {
      const result = await axios("http://localhost:9191/orders/orderlines/fromorder/" + id);
      return result.data;
    };
    fetchOrderLines().then((r) => setDishesInOrder(r));
  }, []);

  useEffect(() => {
    const fetchDishes = async () => {
      const result = await axios("http://localhost:9191/menu/dishes/all");
      return result.data;
    };
    fetchDishes().then((r) => setDishes(r));
  }, [])

  const getDishName = (id) => {
    for (var dish of Dishes) {
      if (dish.dishId === id) {
        return dish.name;
      }
    }
  }

  const timeAgo = (prevDate) => {
    const diff = Number(new Date()) - new Date(prevDate);
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
      case diff < 0:
        return "Time Unavailible"
      case diff < minute:
        const seconds = Math.round(diff / 1000);
        return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
      case diff < hour:
        const minutes = Math.round(diff / minute);
        return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
      case diff < day:
        const hours = Math.round(diff / hour);
        return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
      case diff < month:
        const days = Math.round(diff / day);
        return `${days} ${days > 1 ? 'days' : 'day'} ago`;
      case diff < year:
        const months = Math.round(diff / month)
        return `${months} ${months > 1 ? 'months' : 'month'} ago`;
      case diff > year:
        const years = Math.round(diff / year);
        return `${years} ${years > 1 ? 'years' : 'year'} ago`;
      default:
        return "";
    }
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Tafel {+" " + tableNum}</Card.Text>
          {DishesInOrder
            .map((dish) => (
              <Card.Text>{`${dish.amount}x ${getDishName(dish.dishId)}`}</Card.Text>
            )
            )}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{timeAgo(orderTime)}</small>
          <Button className="float-right" onClick={onDoneClick}>
            Done
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default OrderItem;
