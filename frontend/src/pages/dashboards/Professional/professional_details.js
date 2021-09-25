import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import BarChart from "../../charts/Chartjs/BarChart";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 16,
  },
  minGrid: {
    justifyContent: "center",
  },
  paper: {
    // height: 200,
    // width: 200,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.6,
    },
  },
  rating: {
    color: "#f00",
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

const experiences = [
  {
    profession: "Web Developer",
    client: "At Ne Company",
    working_duration: "March 2019 - current",
  },
  {
    profession: "Web Developer",
    client: "At Ne Company",
    working_duration: "March 2019 - current",
  },
  {
    profession: "Web Developer",
    client: "At Ne Company",
    working_duration: "March 2019 - current",
  },
];

const certifications = [
  { name: "Certification1" },
  { name: "Certification2" },
  { name: "Certification3" },
  { name: "Certification4" },
  { name: "Certification5" },
  { name: "Certification6" },
  { name: "Certification7" },
  { name: "Certification8" },
  { name: "Certification9" },
];

class ProfessionalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="professional_info">
        <Avatar style={{ width: 130, height: 130 }} />
        <span className="name">
          {this.props.match.params.professional_name}
        </span>
        <span className="profession">Web Developer</span>
        <span className="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className="experience">
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="center"
                spacing={6}
                className={classes.minGrid}
              >
                <Grid item>
                  <Paper className={classes.paper}>
                    <div className="clients-reached">
                      <span className="number">30</span>
                      <span className="info">pBuddy clients reached</span>
                      <div className="most-recent">
                        <span className="heading">Recent Client</span>
                        <Avatar />
                        <div className="flex">
                          <span className="client">Tai Mai</span>
                          <span className="date-served">
                            satisfied on 07/12/2020
                          </span>
                        </div>
                        <span className="professional-rating">
                          profession rating :
                          <Rating
                            className={classes.rating}
                            name="read-only"
                            value={4}
                            readOnly
                          />
                        </span>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <div className="statistical-reach">
                      <BarChart />
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <div className="profession-certifications">
                      {certifications.map((cert, index) => {
                        return <div className="certification">{cert.name}</div>;
                      })}
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <button>Connect Me</button>
      </div>
    );
  }
}

export default withStyles(useStyles)(ProfessionalDetails);
