import MaterialUISwitch from "../assets/MaterialUISwitch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import useThemeContext from "./theme/useThemeContext";

const SwitchMUI = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <FormControlLabel
      control={<MaterialUISwitch onChange={toggleColorMode} />}
      label={<Typography fontSize={13}>{mode} mode</Typography>}
      labelPlacement="bottom"
    />
  );
};

export default SwitchMUI;
