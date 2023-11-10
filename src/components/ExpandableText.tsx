import { Button, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Typography>{children}</Typography>;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Typography variant="subtitle1">
      {summary}{" "}
      <Button
        variant="contained"
        size="small"
        color="warning"
        onClick={() => setExpanded(!expanded)}
      >
        <Typography fontWeight="bold" fontSize={11}>
          {expanded ? "Show Less" : "Read More"}
        </Typography>
      </Button>
    </Typography>
  );
};

export default ExpandableText;
