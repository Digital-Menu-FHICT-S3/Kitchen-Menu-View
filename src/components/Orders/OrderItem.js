import React from "react";
import { Card, Button } from "react-bootstrap";

const OrderItem = ({ title, tableNum, image, orderTime, onDoneClick }) => {

  const timeAgo = (prevDate) => {
    const diff = Number(new Date()) - new Date(prevDate);
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
      case diff < 0:
        return "NaN"
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
