import { Grid, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LogoGolden from "../../assets/Image/Golden.svg";
import LogoFurniture from "../../assets/Image/Furniture.svg";
import LogoGraphic from "../../assets/Image/Graphic.svg";
import LogoSalva from "../../assets/Image/Salva.svg";
import LogoTravelLookBook from "../../assets/Image/TravelLookBook.svg";
import Brand1 from "../../assets/Image/img1.svg";
import Brand2 from "../../assets/Image/img2.svg";
import Brand3 from "../../assets/Image/img3.svg";
import Brand4 from "../../assets/Image/img4.svg";
import Brand5 from "../../assets/Image/img5.svg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "styled-components";
import BrandCard from "./BrandCard";
const Brand = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1350px",
      }}
    >
      <Grid
        p="80px 0px"
        container
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid>
          <img src={LogoGraphic} alt="" />
        </Grid>
        <Grid>
          <img src={LogoSalva} alt="" />
        </Grid>
        <Grid>
          <img src={LogoGolden} alt="" />
        </Grid>
        <Grid>
          <img src={LogoFurniture} alt="" />
        </Grid>
        <Grid>
          <img src={LogoTravelLookBook} alt="" />
        </Grid>
      </Grid>

      <Grid container justifyContent="space-between" columns={24}>
        <Grid position="relative" item>
          <Box
            position="absolute"
            component="div"
            sx={{
              transform: "rotate(270deg)",
              transformOrigin: "0 0",
              bottom: 0,
              top: "97%",
              ml: "-60px",
            }}
          >
            <Typography
              textTransform="uppercase"
              fontFamily="Roboto"
              fontWeight="400"
              variant="h3"
              fontSize="34px"
            >
              Explore new and popular styles
            </Typography>
          </Box>
          <BrandCard photo={Brand4} categoryName="Manto" productQuantity={86} />
        </Grid>
        <Grid item xl={12}>
          <Grid container justifyContent="space-around" rowGap="20px">
            <BrandCard
              photo={Brand1}
              categoryName="Shirt"
              productQuantity={320}
            />
            <BrandCard
              photo={Brand2}
              categoryName="Coat"
              productQuantity={520}
            />
            <BrandCard
              photo={Brand3}
              categoryName="Jacket"
              productQuantity={103}
            />
            <BrandCard
              photo={Brand5}
              categoryName="Pants"
              productQuantity={200}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Brand;
