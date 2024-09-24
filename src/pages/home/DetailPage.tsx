import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMovieCast, useGetMovieDetail, useGetMovieVideos } from "./hooks";
import CastCard from "./components/CastCard";

const DetailPage = () => {
  const params = useParams();
  const { data } = useGetMovieDetail(params.id);
  const { data: castData } = useGetMovieCast(params.id);
  const { data: movieData } = useGetMovieVideos(params.id);

  console.log("hello", movieData);
  const basic = "https://image.tmdb.org/t/p/original";
  const basicVideo = "https://www.youtube.com/embed/";
  const navigate = useNavigate();
  const Trailer = movieData?.results.find((m) => m.type === "Trailer")?.key;

  return (
    <>
      <Button onClick={() => navigate(`/`)}>Back</Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "5px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "red" }}>
          {data?.original_title}
        </Typography>
        <div style={{ width: "100%" }}>
          <p style={{ textAlign: "center" }}>
            <iframe
              width="90%"
              height="500"
              src={basicVideo + Trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>{" "}
          </p>
        </div>

        <img
          style={{
            width: "80%",
            height: "500px",
            objectPosition: "center",
            objectFit: "cover",
          }}
          src={basic + data?.backdrop_path}
        />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {data?.overview}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {data?.popularity}
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {data?.release_date}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {castData?.cast?.map((cast) => {
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
    </>
  );
};
export default DetailPage;
