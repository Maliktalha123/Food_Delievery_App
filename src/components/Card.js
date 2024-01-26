import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PizzaPhoto from './images/pizza.jpg'

export default function ActionAreaCard(props) {
  return (
    < Card sx={{ maxWidth: 250 }} style={{ "marginTop": "7px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={PizzaPhoto}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.discription}
          </Typography>
          <div style={{ display: "flex", gap: "3px" }}>
            <select style={{"cursor":"pointer"}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select style={{"cursor":"pointer"}}>
              <option value="small">Small</option>
              <option value="meduim">Medium</option>
              <option value="large">Large </option>
            </select>
            <h3>Total Price</h3>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
