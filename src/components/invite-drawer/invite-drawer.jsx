import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button, Stack } from "@mui/material";
import likeGift from "../../images/likeGift.jpg";
import daryaft from "../../images/daryaft.jpg";
import code from "../../images/code.jpg";
import styles from "./styles.module.css";

const drawerBleeding = 60;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[100],
}));

function InviteDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(70% - ${drawerBleeding}px)`,
            overflow: "auto",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(true)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absloute",
            top: 1,
            borderTopLeftRadius: 59,
            borderTopRightRadius: 59,
            visibility: "-100%",
            right: 0,
            left: 0,
          }}
        >
          <Stack className={styles.all}>
            <Stack>
              <Typography
                sx={{ fontWeight: "600", textAlign: "center" }}
                pt={1}
              >
                Invite
              </Typography>
              <Typography sx={{ color: "gray", textAlign: "center" }} pt={1}>
                Invite 10 of your friends to Blue and get 30,000 $ as a gift for
                each successful account opening
              </Typography>
              <Stack
                display="flex"
                direction="row"
                justifyContent="center"
                pt={3}
              >
                <img src={likeGift} className={styles.img1} />
                <img src={daryaft} className={styles.img2} />
              </Stack>
              <Stack
                display="flex"
                direction="row"
                justifyContent="center"
                pt={6}
              >
                <img src={code} className={styles.img3} />
              </Stack>
            </Stack>
            <Stack pb={4}>
              <Button variant="contained" sx={{ fontWeight: 500 }}>
                sending invitation
              </Button>
            </Stack>
          </Stack>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default InviteDrawer;
