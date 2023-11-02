import Typography from "@mui/material/Typography";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import { GameQuery } from "../App";
import GameCardSkeleton from "./GameCardSkeleton";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isFetching, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [...Array(20).keys()];

  if (error) return <Typography>{error.message}</Typography>;

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      style={{ overflow: "hidden", justifyContent: "center" }}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <LoadingButton
          loading
          variant="contained"
          disabled
          sx={{ width: 120, height: 40 }}
        />
      }
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {isFetching &&
          !games &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default GameGrid;
