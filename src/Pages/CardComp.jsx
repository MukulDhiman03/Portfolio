import { CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CardComp = ({ data }) => {
  return (
    <>
      <Card sx={{ width: 400, height: 510, p: 2 }}>
        <Link to={data.link} style={{ textDecoration: "none" }}>
          <h2 style={{ color: "black", fontWeight: "bolder" }}>
            {data.title} <InsertLinkIcon sx={{ color: "blue" }} />
          </h2>
        </Link>
        <CardHeader subheader={data.timeperiod} />
        <CardMedia
          component="img"
          height="194"
          image={data.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
};

export default CardComp;
