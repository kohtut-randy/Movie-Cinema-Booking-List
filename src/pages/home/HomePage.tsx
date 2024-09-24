import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useGetMovieList } from "./hooks";
import MealCard from "./components/MealCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMovieList();
  const basic = "https://image.tmdb.org/t/p/original";
  if (isLoading) {
    return (
      <Box
        py={4}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box py={4}>
      <Typography variant="h5" fontWeight={500} mb={2}>
        Movies
      </Typography>
      <Grid container spacing={2}>
        {data?.results?.map((results) => {
          return (
            <Grid key={results.id} item xs={12} sm={6} md={3} lg={2}>
              <MealCard
                img={basic + results.backdrop_path}
                name={results.original_title}
                vote={results.vote_average}
                onClick={() => navigate(`detail/${results.id}`)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
