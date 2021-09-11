import React, { useDebugValue } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import _ from "lodash";
import { useHistory } from "react-router-dom";

import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import PublicIcon from "@material-ui/icons/Public";

import { UnEce } from "../services/UnEce";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginBottom: "8px",
  },
}));

export const CredentialField = ({ label, value }) => {
  const history = useHistory();
  const classes = useStyles();
  let correctedLabel = label;

  if (label === "Id") {
    correctedLabel = "ID";
  }

  const isDid = value.toString().indexOf("did:") === 0;

  const renderValue = (value) => {
    if (value === true) {
      return "Yes";
    }
    if (value === false) {
      return "No";
    }
    return value;
  };

  return (
    <div className={classes.root}>
      {
        <FormControl size="small" fullWidth variant="standard">
          <InputLabel shrink style={{ fontWeight: "600" }}>
            {correctedLabel}
          </InputLabel>
          <span
            style={{
              marginTop: "17px",
              overflowWrap: "break-word",
            }}
          >
            {UnEce.codes.includes(value) ? (
              <>
                <Chip
                  style={{ marginTop: "8px" }}
                  variant="outlined"
                  color={"secondary"}
                  avatar={
                    <Avatar>
                      <PublicIcon style={{ color: "#FFF" }} />
                    </Avatar>
                  }
                  label={value}
                  onClick={() => {
                    window.open(
                      `https://service.unece.org/trade/uncefact/vocabulary/unlocode-as/#${value}`
                    );
                  }}
                />
              </>
            ) : (
              <>
                {isDid ? (
                  <Chip
                    style={{ marginTop: "8px" }}
                    variant="outlined"
                    color={"secondary"}
                    avatar={
                      <Avatar>
                        <PublicIcon style={{ color: "#FFF" }} />
                      </Avatar>
                    }
                    label={value}
                    onClick={() => {
                      if (value.indexOf("did:key") === 0) {
                        window.open(
                          "https://did.key.transmute.industries/" + value
                        );
                      } else {
                        value.indexOf("did:web:dcsa.org") === 0
                          ? history.push("/organizations/" + value)
                          : history.push("/documents/" + value);
                      }
                    }}
                  />
                ) : (
                  renderValue(value)
                )}
              </>
            )}
          </span>
        </FormControl>
      }
    </div>
  );
};
