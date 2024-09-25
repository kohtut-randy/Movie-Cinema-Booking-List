import { Box, Stack, Typography } from "@mui/material";

const CastCard = ({
  imageUrl,
  orgname,
  characterName,
}: {
  imageUrl: string;
  orgname: string;
  characterName: string;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="meal"
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "5px",
        }}
      />
      <Stack
        direction="row"
        px={0.2}
        pb={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body2">{orgname}</Typography>
        <Typography variant="body2"> as </Typography>

        <Typography variant="body2">{characterName}</Typography>
      </Stack>
    </Box>
  );
};

export default CastCard;
