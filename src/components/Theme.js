import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {
  darken,
  lighten,
  alpha,
} from "@material-ui/core/styles/colorManipulator";
import blue from "@material-ui/core/colors/blue";

// const lightGrey = '#f5f7fd';
const darkerLightGrey = "#8286a3";

const primaryColor = "#594aa8";
const secondaryColor = blue["400"];

const lightBackgroundColor = "#2a2d4c";
const darkBackgroundColor = "#151726";

const successColor = "#48caca";

const font4 = '"Rajdhani"';

// Ref defaults: https://material-ui.com/customization/default-theme/#explore
export const theme = createTheme({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: "none",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: darkBackgroundColor,
        },
      },
    },
    MuiStep: {
      root: {
        marginTop: "-8px",
      },
    },
    MuiStepContent: {
      root: {
        paddingTop: "8px",
      },
    },
    MuiStepLabel: {
      vertical: {
        marginBottom: "-8px",
      },
      label: {
        color: primaryColor,
        "&$active": {
          color: primaryColor,
        },
        "&$completed": {
          color: successColor,
        },
      },
    },
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: successColor,
          border: "none",
        },
        "&$active": {
          border: "none",
        },
        "&$active > text": {
          fill: "#fff",
        },
        "& > text": {
          fill: primaryColor,
        },
        color: "transparent",
        border: "1px solid #594aa8",
        borderRadius: "50%",
      },
      active: {},
      completed: {},
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "none",
      },
    },
  },
  shadows: [
    "none",
    "0px 0px 14px rgba(53, 64, 82, 0.05)", // default shadow
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  splashImage: "",
  palette: {
    type: "dark",
    background: {
      light: lighten(darkBackgroundColor, 0.07),
      main: darkBackgroundColor,
      dark: darken(darkBackgroundColor, 0.2),
      paper: lightBackgroundColor,
    },
    primary: {
      light: lighten(primaryColor, 0.3),
      main: primaryColor,
      dark: darken(primaryColor, 0.07),
    },
    secondary: {
      light: lighten(secondaryColor, 0.07),
      main: secondaryColor,
      dark: darken(secondaryColor, 0.07),
    },
    text: {
      primary: lighten(darkerLightGrey, 0.5),
      secondary: lighten(darkerLightGrey, 0.8),
    },
    success: {
      light: lighten(successColor, 0.07),
      main: successColor,
      dark: darken(successColor, 0.07),
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    fontFamily: [font4].join(","),
    h1: {
      fontSize: "4em",
      fontWeight: 500,
      fontFamily: "Rajdhani",
    },
    h2: {
      fontSize: "2em",
      fontWeight: 100,
      fontFamily: "Rajdhani",
    },
    h3: {
      fontSize: "1.5em",
      fontWeight: 100,
      fontFamily: "Roboto Condensed",
      letterSpacing: ".1em",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "1.75em",
      fontWeight: 100,
      fontFamily: "Rajdhani",
    },
    h5: {
      fontSize: ".9em",
      fontFamily: "Roboto Condensed",
      letterSpacing: ".1em",
      textTransform: "uppercase",
    },
    h6: {},
    subtitle1: {},
    subtitle2: {
      fontSize: "12px",
      color: "rgba(0,0,0,0.54)",
    },
    body1: {
      fontSize: "1.25em",
    },
    body2: {
      fontSize: "1.1em",
    },
    button: {
      fontSize: "1em",
      fontWeight: 600,
      letterSpacing: ".1em",
      fontFamily: "Roboto Condensed",
    },
    caption: {},
    overline: {},
  },
});

theme.overrides.MuiButton = {
  textPrimary: {
    color: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: alpha(
        theme.palette.primary.light,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
  containedSecondary: {
    color: "white",
  },
};

export const Theme = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.any.isRequired,
};
