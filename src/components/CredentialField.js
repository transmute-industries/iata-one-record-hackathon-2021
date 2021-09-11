import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import _ from "lodash";

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

const credentialUtil = {
  displayType: (type) => {
    const t = _.cloneDeep(type);
    let newType = "";
    if (Array.isArray(t)) {
      if (t.length) {
        newType = t.pop();
      }
    } else if (t) {
      newType += t;
    }
    return _.startCase(newType);
  },
};

export const CredentialField = ({ label, value }) => {
  const classes = useStyles();
  let correctedLabel = label;

  if (label === "Id") {
    correctedLabel = "ID";
  }

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
      {/* For multiline input, print preview clips text */}
      {label !== "Id" && label !== "Type" && (
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
              <> {renderValue(value)}</>
            )}
          </span>
        </FormControl>
      )}
      {(label === "Id" || label === "Type") && (
        <TextField
          size="small"
          label={correctedLabel}
          value={label === "Type" ? credentialUtil.displayType(value) : value}
          fullWidth
          multiline
          InputProps={{
            disableUnderline: true,
            className: classes.textarea,
          }}
          variant="filled"
        />
      )}
    </div>
  );
};
