import { Container, Box, Typography, Button } from "@mui/material";
import Banner from "../../assets/Image/background.svg";
import LogoZara from "../../assets/Image/Zara.svg";
import LogoZaraOpacity from "../../assets/Image/ZaraOpacity.svg";
const CollectionBanner = () => {
  return (
    <Container
      sx={{
        position: "relative",
        padding: "80 0px",
      }}
      disableGutters
      maxWidth={false}
    >
      <img style={{maxWidth:"100%"}} src={Banner} alt="" />
      <Box
        position="absolute"
        top="55%"
        left="70%"
        sx={{
          transform: "translate(-50%,-50%)",
        }}
      >
        <img src={LogoZara} alt="" />
        <Typography
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="26px"
          maxWidth="504px"
          color="#FF6F61"
          textTransform="capitalize"
          m="40px 0px "
        >
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </Typography>
        <Button
          sx={{
            background: "#FFFFFF",
            "&:hover": { backgroundColor: "#FFFFFF" },
            padding: "19px 26px 19px 26px",
            color: "#1E2832",
            fontSize: "29px",
            fontWeight: "400",
            fontFamily: "Roboto",
            textTransform: "capitalize",
          }}
        >
          See Collection
        </Button>
      </Box>
      <Box position="absolute" top="5%" right="0">
        <img src={LogoZaraOpacity} alt="" />
      </Box>
    </Container>
  );
};

export default CollectionBanner;
