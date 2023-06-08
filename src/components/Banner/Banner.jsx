import { Grid, Box, Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "styled-components";
import {
  ImgBanner,
  LogoShopCart,
  BannerTree,
  BannerSmallTree,
} from "../ImageSVG/index";
const ButtonStyled = styled.button`
  background-color: #1e2832;
  width: 223px;
  max-width: 100%;
  min-height: 72px;
  margin-top: 70px;
  border: none;
  span {
    color: white;
    font-size: 29px;
    font-weight: 400;
    font-family: "Roboto";
    margin-left: 20px ;
  }
  
`;

const Banner = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "100%",
        position: "relative",
        bgcolor: "#F0F0F0",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "1350px",
          maxWidth: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography fontFamily="Roboto" fontWeight="300" fontSize="74px">
              Collections
            </Typography>
            <Typography
              textTransform="capitalize"
              lineHeight="55px"
              fontSize="30px"
              width="682px"
              fontWeight="400"
              mt="10px"
            >
              you can explore ans shop many differnt collection from various
              barands here.
            </Typography>
            <ButtonStyled >
              <LogoShopCart />
              <Typography variant="span">Shop now</Typography>
            </ButtonStyled>
          </Grid>

          <Grid item>
            <ImgBanner />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: "30%",
        }}
      >
        <BannerTree />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: "20%",
        }}
      >
        <BannerSmallTree />
      </Box>
    </Container>
  );
};

export default Banner;
