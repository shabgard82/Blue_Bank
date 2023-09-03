import React from "react";
import styles from "./styles.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import invite from "../../images/invite.jpg";
import MuiDrawer from "../bottom-drawer/drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InviteDrawer from "../../components/invite-drawer/invite-drawer";
import { useNavigate } from "react-router-dom";

function InviteFriend() {
  const navigate = useNavigate();
  const handleBack = () => navigate("/profile");
  return (
    <Stack>
      <Stack className={styles.body}>
        <Stack display="flex" direction="row" justifyContent="space-between">
          <ArrowBackIcon onClick={handleBack} sx={{ color: "white",marginLeft:'15px' ,marginTop:'15px'}} />
          <Stack>
            <IconButton sx={{ "& .MuiSvgIcon-root": { color: "#fff" } }}>
              <MuiDrawer />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <InviteDrawer />
    </Stack>
  );
}
export default InviteFriend;
