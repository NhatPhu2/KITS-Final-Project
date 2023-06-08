import { Box, Typography, Stack } from "@mui/material";
import { styled } from "styled-components";

const MyBox = styled(Box)`
  position: relative;
  &:hover .overlay {
    opacity: 1;
  }
  .overlay {
    opacity: 0;
    transition: 0.5s ease;
  }
`;

const BrandCard = ({ photo, categoryName, productQuantity }) => {
  return (
    <MyBox>
      <img src={photo} alt="" />
      <Stack
        className="overlay"
        direction="row"
        color="#ffff"
        bgcolor="#1E2832"
        p="10px 0px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        position="absolute"
        bottom={0}
      >
        <Typography p="5px 10px">{categoryName}</Typography>
        <Typography p="5px 10px">
          {productQuantity > 0 ? `${productQuantity} Product` : ""}{" "}
        </Typography>
      </Stack>
    </MyBox>
  );
};

export default BrandCard;
