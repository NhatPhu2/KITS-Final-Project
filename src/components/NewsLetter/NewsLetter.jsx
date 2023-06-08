import { Typography, Container, Box, Button, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ImgProduct from "../../assets/Image/product1.svg";
import { ReactComponent as FilterIcon } from "../../assets/Image/iconFilter.svg";
import Card from "../ProductCard/ProductCard";
import PhotoProduct1 from "../../assets/Image/product2.svg"
import PhotoProduct2 from "../../assets/Image/product4.svg"
import PhotoProduct3 from "../../assets/Image/product3.svg"
import PhotoProduct4 from "../../assets/Image/product1.svg"
import PhotoProduct5 from "../../assets/Image/product5.svg"
import PhotoProduct6 from "../../assets/Image/product6.svg"
import PhotoProduct7 from "../../assets/Image/product7.svg"
import PhotoProduct8 from "../../assets/Image/product8.svg"
const NewsLetter = () => {
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
        Or subscribe to the newsletter
      </Typography>
      <Grid2
        p="30px 0px"
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid2>
          <Grid2 container gap="20px">
            <Typography
              color="#000000"
              fontFamily="Open Sans"
              fontSize="16px"
              fontWeight="600"
            >
              All Products
            </Typography>
            <Typography>T-Shirt</Typography>
            <Typography>Hoodies</Typography>
            <Typography>Jacket</Typography>
          </Grid2>
        </Grid2>
        <Grid2>
          <Button
            sx={{
              background: "#1E2832",
              padding: "5px 15px 5px 15px",
              outline: "none",
              border: "none",
              "&:hover":{backgroundColor: "#1E2832" }
            }}
          >
            <FilterIcon />
            <Typography
              ml="5px"
              color="#FFFFFF"
              fontFamily="Open Sans"
              fontSize="16px"
              fontWeight="400"
            >
              Filter
            </Typography>
          </Button>
        </Grid2>
      </Grid2>

      {/* product card*/}

      <Grid2
        container
        alignItems="center"
        justifyContent="space-between"
        rowGap="20px"
      >
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct1}/>
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct2}/>
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct3}/>
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct4}/>
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct8}/>
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct7}/>
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct5}/>
        <Card title="Adicolor Classics Joggers" categoryName="Dress" photo={PhotoProduct6}/>
      </Grid2>
    </Container>
  );
};

export default NewsLetter;
