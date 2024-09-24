import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useGetMovieCast } from "../home/hooks";
import CastCard from "../home/components/CastCard";
import { useParams } from "react-router-dom";

const CastPage = () => {
  const params = useParams();
  const { data, isLoading } = useGetMovieCast(params.id);
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
        Cast
      </Typography>
      <Grid container spacing={2}>
        {data?.cast?.map((cast) => {
          return (
            <Grid key={cast.id} item xs={12} sm={6} md={3} lg={2}>
              <CastCard
                imageUrl={basic + cast.profile_path}
                orgname={cast.original_name}
                characterName={cast.character}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CastPage;
