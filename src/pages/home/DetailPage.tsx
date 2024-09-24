import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMovieDetail } from "./hooks";

const DetailPage = () => {
  const params = useParams();
  const { data } = useGetMovieDetail(params.id);
  console.log(data);
  const basic = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

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
    </>
  );
};
export default DetailPage;
