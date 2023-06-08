import { Box, Stack } from "@mui/material";
import { styled } from "styled-components";
import { ReactComponent as IconInstaram } from "../../assets/Image/IconThinInstagram.svg";
const MyBox = styled(Box)`
  position: relative;
  &:hover .overlay{
    opacity: 1;
  }

  .overlay{
    opacity: 0;
    transition: .3s ease;
    background-color: rgba(0,0,0,0.5);
  }
`;
const ContactCard = ({ photo }) => {
  return (
    <MyBox>
      <img src={photo} alt="" />
      <Stack className="overlay" width="100%" height="100%" position="absolute" top={0}>
        <Stack
          position="absolute"
          left="50%"
          top="50%"
          sx={{
            transform: "translate(-50%,-50%)",
          }}
        >
          <IconInstaram />
        </Stack>
      </Stack>
    </MyBox>
  );
};

export default ContactCard;
