import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{zIndex:666, width: '100%',position:'absolute',bottom:0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction icon={<PersonOutlineIcon />} />
      <BottomNavigationAction icon={<CreditCardIcon />} />
      <BottomNavigationAction icon={<QrCodeScannerIcon />} />
      <BottomNavigationAction icon={<SyncAltIcon />} />
      <BottomNavigationAction icon={<HomeIcon />} />
    </BottomNavigation>
  );
}
