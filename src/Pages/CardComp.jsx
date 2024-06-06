import { CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import img from "../img/bg.jpg";

const CardComp = ({ data }) => {
  return (
    <Card sx={{ width: 400, height: 500, p: 2 }}>
      <h2 style={{ color: "black", fontWeight: "bolder" }}>{data.title}</h2>
      <CardHeader subheader={data.timeperiod} />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default CardComp;
