import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import loading from "../assets/transmute-loading-white.gif";

export const Loading = ({ message, style, fullPage, textStyle }) => {
  const loadingStyle = {
    filter: "brightness(20%) sepia(3) saturate(300%) hue-rotate(-150deg)",
    ...style,
  };

  const typographyStyle = {
    marginTop: "16px",
    ...textStyle,
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      style={{
        width: fullPage ? "100%" : "min-content",
      }}
    >
      <Box
        style={{
          flexDirection: "column",
          textAlign: "center",
          marginTop: fullPage ? "20%" : "0%",
        }}
      >
        <img src={loading} alt="loading" style={loadingStyle} />
        <Typography style={typographyStyle}>{message}</Typography>
      </Box>
    </Box>
  );
};

Loading.propTypes = {
  message: PropTypes.any,
};
