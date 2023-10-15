import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;
  return (
    <Box sx={{ pb: 1 }}>
      <FormControl sx={{ width: 220 }}>
        <InputLabel id="demo-simple-select-label">Platforms</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={""}
          label="Platforms"
        >
          {platforms?.results.map((platform) => (
            <MenuItem
              selected={platform.id === selectedPlatform?.id}
              onClick={() => onSelectPlatform(platform)}
              value={platform.name}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default PlatformSelector;
