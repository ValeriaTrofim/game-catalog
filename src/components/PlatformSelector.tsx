import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { platforms, error } = usePlatforms();

  if (error) return null;
  return (
    <Box sx={{ pb: 1 }}>
      <FormControl sx={{ width: 120 }}>
        <InputLabel id="demo-simple-select-label">Platforms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Platforms"
        >
          {platforms?.results.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default PlatformSelector;
