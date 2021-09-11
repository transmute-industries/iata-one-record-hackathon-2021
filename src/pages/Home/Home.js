import { Hero } from "../../components/Hero";
import { ParticlesBlock } from "../../components/ParticlesBlock";

import { Typography, Link, Button, Grid } from "@material-ui/core";

import { Link as RouteLink } from "react-router-dom";

import logo from "../../assets/logo-with-text-white.svg";

import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100%",
          color: "white",
        }}
      >
        <Hero
          title={
            <Typography variant={"h1"} gutterBottom>
              Proteus
            </Typography>
          }
          description={
            <>
              <Typography variant={"h4"} gutterBottom>
                Digitized paper.  
                {" "}
                <Link href="https://www.w3.org/TR/did-core" color={"secondary"}>
                  Trusted
                </Link>
                {" "} parties.                 {" "}
                <Link
                  href="https://www.w3.org/TR/vc-data-model"
                  color={"secondary"}
                >
                  Verifiable
                </Link>{" "}
                 data. 
              </Typography>
              <Typography variant={"h6"} gutterBottom>
                powered by
              </Typography>
              <img
                src={logo}
                alt="Transmute Logo"
                style={{ height: "42px", marginTop: "48px" }}
              />
            </>
          }
        />
      </div>
      <div
        style={{
          backgroundImage: "url('./splash-0.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backgroundBlendMode: "darken",
          backgroundRepeat: "none",
          width: "100%",
        }}
      >
        <ParticlesBlock />
      </div>

      <div style={{ padding: "32px" }}>
        <Grid container spacing={4}>
          <Grid item>
            <Card
              title={"Lizard"}
              image={
                "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              }
              description={
                <>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </>
              }
              actions={
                <RouteLink to="/issue">
                  <Button size="small" color="primary">
                    Issue
                  </Button>
                </RouteLink>
              }
            />
          </Grid>
          <Grid item>
            <Card
              title={"Lizard"}
              image={
                "https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
              }
              description={
                <>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </>
              }
              actions={
                <RouteLink to="/verify">
                  <Button size="small" color="primary">
                    Verify
                  </Button>
                </RouteLink>
              }
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
