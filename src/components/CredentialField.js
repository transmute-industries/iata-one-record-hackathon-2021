import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import _ from "lodash";

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
            {value}
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
