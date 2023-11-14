import { Box, List, ListItemText, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box>
      <List>
        <Typography sx={{ mt: 4 }} variant="h6" component="div" color="grey">
          {term}
        </Typography>
        <ListItemText primary={children} />
      </List>
    </Box>
  );
};

export default DefinitionItem;
