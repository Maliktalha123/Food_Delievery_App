import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { UseDispatchCart, UseCart } from "./ContextReducer";
import { useEffect,useRef,useState } from "react";

function ActionAreaCard(props) {
  const dispatch = UseDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let data = UseCart();
  const handleSubmit = async () => {
    await dispatch({
      type: "Add",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    console.log("Data => ", data);
  };
  
  const priceRef = useRef()
useEffect(()=>{
setSize(priceRef.current.value)
},[])
  let finalPrice = qty * parseInt(options[size]);
  return (
    <Card sx={{ maxWidth: 250 }} style={{ marginTop: "7px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={props.foodItem.img}
          alt="Your internet connection is too slow..."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.foodItem.name}
          </Typography>

          <div style={{ display: "flex", gap: "5px" }}>
            <select
              style={{ cursor: "pointer", width: "40px", height: "25px" }}
              className="bg-success-600"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(5), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              style={{ cursor: "pointer", width: "80px", height: "25px" }}
              className="bg-success-600"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
<div className="d-inline h-100 fs-5">${finalPrice}/-</div>
          <div className="btn text-white bg-danger m-2" onClick={handleSubmit}>
            Add to Cart
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;
