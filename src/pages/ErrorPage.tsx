import { Box, Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Layout from "./Layout";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Layout />
      <Box paddingLeft={3}>
        <Typography variant="h3">Oops...</Typography>
        <Typography variant="h4">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error ocurred"}{" "}
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
