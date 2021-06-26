import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

export default function EventCard(props) {
  const classes = useStyles({
    root: {
      Width: "100%",
      height: 300,
    },
    img: {
      // height: 277,
      height: 180,
    },
  });

  return (
    // <Card className={classes.root}>
    //     <CardActionArea>
    //         <CardMedia className={classes.media} component="img" image={BackgroundImage} />
    //     </CardActionArea>
    //     <CardActionArea>
    //         <CardContent>
    //             <Typography variant="p">
    //                 {props.date}
    //             </Typography>
    //             <Typography variant="h5">
    //                 {props.name}
    //             </Typography>
    //             <Typography variant="p">
    //                 {props.location}
    //             </Typography>
    //         </CardContent>
    //         <Button variant="outlined">Register</Button>
    //     </CardActionArea>
    // </Card>

    <Router>
      <Card className={classes.root}>
        <Link to={`${props.id}`} component={CardActionArea}>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="./bg.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="p" component="p">
              {props.date}
            </Typography>
            <Typography variant="h6" component="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {props.location}
            </Typography>
          </CardContent>
        </Link>
        <CardActions>
          <Button variant="contained" size="medium" disableElevation>
            Register
          </Button>
        </CardActions>
      </Card>
    </Router>
  );
}
