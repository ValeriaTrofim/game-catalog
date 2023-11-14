import { Box, Typography } from "@mui/material";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "#008312" : score > 60 ? "#fb8c00" : "";

  return (
    <Typography component={"div"} variant="body2" color={color}>
      <Box
        sx={{
          paddingLeft: 1,
          paddingRight: 1,
          border: `1px solid ${color}`,
          borderRadius: 1,
          width: 35,
        }}
      >
        {score}
      </Box>
    </Typography>
  );
};

export default CriticScore;
