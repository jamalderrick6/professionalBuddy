import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import { Avatar } from "@material-ui/core";
import { Star } from "react-feather";
import history from "../../../Utils/history";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 160,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.6,
    },
  },
  control: {
    padding: 20,
  },
  square: {
    width: "100%",
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
  },
  profession: {
    fontSize: 14,
    fontWeight: 600,
    color: "#f00",
  },
  ratings: {
    opacity: 0.6,
    fontSize: 12,
  },
});

const professionals = [
  {
    name: "Stargnar Martin",
    image:
      "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profession: "Web Developer",
    ratings: "4.3",
  },

  {
    name: "Andrew Mack",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profession: "Graphic Designer",
    ratings: "4.5",
  },
  {
    name: "Peter Metro",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profession: "Optician",
    ratings: "4.8",
  },
  {
    name: "Break Lee",
    image:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profession: "Therapist",
    ratings: "3.8",
  },
  {
    name: "Sonia Antwev",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    profession: "UX/UI Designer",
    ratings: "4.6",
  },
  {
    name: "Inisco Anochev",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profession: "Data Engineer",
    ratings: "4.6",
  },
  {
    name: "Toshie Hamur",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profession: "Gym Trainer",
    ratings: "4.5",
  },
  {
    name: "Volvi Peter",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profession: "Database Administrator",
    ratings: "4.2",
  },
];

class ProfessionalsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewProfessional = (professional) => {
    history.push(`/professionals/${professional.name}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={6}>
            {professionals.map((professional, index) => {
              return (
                <Grid key={index} item>
                  <Link to={`/professionals/${professional.name}`}>
                    <Paper
                      // onClick={() => this.viewProfessional(professional)}
                      className={classes.paper}
                    >
                      <Avatar
                        src={professional.image}
                        variant="square"
                        className={classes.square}
                      />
                      <span className={classes.name}>{professional.name}</span>
                      <span className={classes.profession}>
                        {professional.profession}
                      </span>
                      <span className={classes.ratings}>
                        <Star
                          style={{
                            width: 18,
                            color: "#f00",
                            fill: "#f00",
                            marginRight: 2,
                          }}
                        />
                        {professional.ratings}
                      </span>
                    </Paper>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(ProfessionalsList);
