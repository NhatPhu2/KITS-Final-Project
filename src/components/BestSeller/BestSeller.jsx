import { Typography, Container, Box, Button, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ImgProduct from "../../assets/Image/product1.svg";
import Card from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { ReactComponent as NextArrow } from "../../assets/Image/NextArrows.svg";
import { ReactComponent as PreviousArrow } from "../../assets/Image/PreviousArrows.svg";
import PhotoProduct1 from "../../assets/Image/product2.svg";
import PhotoProduct2 from "../../assets/Image/product4.svg";
import PhotoProduct3 from "../../assets/Image/product3.svg";
import PhotoProduct4 from "../../assets/Image/product1.svg";
import PhotoProduct5 from "../../assets/Image/product5.svg";
import PhotoProduct6 from "../../assets/Image/product6.svg";
import PhotoProduct7 from "../../assets/Image/product7.svg";
import PhotoProduct8 from "../../assets/Image/product8.svg";
const BestSeller = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: (
      <Box
        zIndex="99"
        position="absolute"
        bottom="50%"
        sx={{ transform: "translateY(-50%)" }}
        right="3%"
      >
        <NextArrow />
      </Box>
    ),
    prevArrow: (
      <Box
        zIndex="99"
        position="absolute"
        bottom="50%"
        sx={{ transform: "translateY(-50%)" }}
        left="3%"
      >
        <PreviousArrow />
      </Box>
    ),
  };

  const MySlider = styled(Slider)`
    position: relative;
    .slick-next:before {
      content: "";
    }
    .slick-prev:before {
      content: "";
    }
  `;
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1350px",
        padding: "80px 0px",
      }}
    >
      <Typography
        fontWeight="500"
        fontFamily="Roboto"
        fontSize="50px"
        textAlign="center"
        variant="h2"
        textTransform="capitalize"
      >
        Best Sellers
      </Typography>
      <Grid2
        container
        justifyContent="space-between"
        alignItems="center"
        p="30px 0px"
      >
        <Grid2>
          <Grid2 container gap="20px">
            <Typography>All Products</Typography>
            <Typography>T-Shirt</Typography>
            <Typography>Hoodies</Typography>
            <Typography>Jacket</Typography>
          </Grid2>
        </Grid2>
        <Grid2>
          <Button
            sx={{
              background: "#1E2832",
              "&:hover": { backgroundColor: "#1E2832" },
            }}
          >
            <Typography
              color="#FFFFFF"
              fontFamily="Open Sans"
              fontSize="16px"
              fontWeight="400"
            >
              Shows All
            </Typography>
          </Button>
        </Grid2>
      </Grid2>

      {/* product card*/}
      <MySlider {...settings}>
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct1}
        />
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct2}
        />
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct3}
        />
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct4}
        />
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct8}
        />
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct7}
        />
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct5}
        />
        <Card
          title="Adicolor Classics Joggers"
          categoryName="Dress"
          photo={PhotoProduct6}
        />
      </MySlider>
    </Container>
  );
};

export default BestSeller;
