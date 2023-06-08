import { Typography, Container, Box, Button, Stack } from "@mui/material";
import { styled } from "styled-components";
import { ReactComponent as IconHeart } from "../../assets/Image/IconHeart.svg";
import { ReactComponent as IconSearch } from "../../assets/Image/IconSearchWhite.svg";
import { LogoShopCart } from "../ImageSVG/index";
const MyBox = styled(Box)`
  max-width: 312px;
  .product-overlay {
    opacity: 0;
    transition: 0.3s ease;
  }
  &:hover .product-overlay {
    opacity: 1;
  }
  .cart-side:hover .icon-cart,.cart-side:hover button {
    fill: #ff6f61;
    color: #ff6f61;
  }

`;
const ProductCard = ({ photo, title, categoryName, price }) => {
  return (
    <MyBox>
      {/*overlay shopnow*/}
      <Box position="relative">
        <img src={photo} />
        <Stack
          bottom={0}
          width="100%"
          bgcolor="#1E2832"
          p="15px 0px"
          direction="row"
          position="absolute"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="product-overlay"
        >
          <Stack direction="row" p="0px 10px" spacing={2}>
            <IconHeart />
            <IconSearch />
          </Stack>
          <Stack className="cart-side" direction="row" p="0px 10px">
            <LogoShopCart className="icon-cart" height="19px" />
            <Button
              sx={{
                cursor: "default",
                height: "25px",
                color: "white",
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
              variant="text"
            >
              Shop Now
            </Button>
          </Stack>
        </Stack>
      </Box>
      {/*tittle*/}
      <Typography
        fontSize="16px"
        fontWeight="600"
        color="#000000"
        fontFamily="Open Sans"
      >
        {title}
      </Typography>
      {/*price and category*/}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          fontSize="16px"
          fontWeight="400"
          color="#00000080"
          fontFamily="Open Sans"
        >
          {categoryName}
        </Typography>
        <Typography
          fontSize="16px"
          fontWeight="600"
          color="#000000"
          fontFamily="Open Sans"
        >
          {price}
        </Typography>
      </Box>
    </MyBox>
  );
};

export default ProductCard;
