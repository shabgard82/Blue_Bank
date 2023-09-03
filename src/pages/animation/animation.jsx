// import React from "react";
// import styles from "./styles.module.css";
// import { Stack } from "@mui/material";
// import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import images from "../../components/images";

// function Animation() {
//   const[width,setWidth]=useState(0);
//   const carousel=useRef();

//   useEffect(()=>{
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   },[]);
//   return (
//     <div className={styles.all}>
//       <motion.div ref={carousel} whileTap={{carousel:"grabbing"}} className={styles.carousel}>
//         <motion.div drag="x" dragConstraints={{right:0,left:-width}} className={styles.innerCarousel}>
//           {images.map((image) => {
//             return (
//               <motion.div className={styles.item} key={image}>
//                 <img src={image} />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
// export default Animation;

import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import yellow from "../../images/yellow.jpg";
import greenn from "../../images/greenn.jpg";
import red from "../../images/red.jpg";
import blue from "../../images/blue.jpg";
import green from "../../images/green.jpg";
import purple from "../../images/purple.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./styles.module.css";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import MuiDrawer from "../bottom-drawer/drawer";
import { useNavigate } from "react-router-dom";

function Animation() {
  const navigate = useNavigate();
  const handle = () => navigate("/sefaresh");
  const handleBack = () => navigate("/payan-sabtnam");
  const options = {
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <Stack
      className={styles.koli}
      display="flex"
      direction="column"
      justifyContent="space-between"
    >
      <Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton sx={{ color: "#317fe3" }}>
            <ArrowBackIcon onClick={handleBack}/>
          </IconButton>
          <Typography>Blue Card order</Typography>
          <IconButton color="primary">
            <MuiDrawer />
          </IconButton>
        </Stack>
        <Stack pt={1}>
          <Typography sx={{ fontWeight: 600 }}>
            Choose the color of your Blue Card
          </Typography>
        </Stack>
      </Stack>
      <Stack className={styles.card}>
        <OwlCarousel className={`owl-theme ${styles.owl}`} {...options}>
          <div className={styles.all}>
            <h6 style={{ height: "100%", width: "250px" }}>
              <img src={purple} className={styles.img1} />
              <Typography sx={{ textAlign: "center" }}>
                purple Blue Card
              </Typography>
            </h6>
          </div>
          <div className={styles.all1}>
            <h6 style={{ height: "100%", width: "250px" }}>
              <img src={greenn} className={styles.img2} />
              <Typography sx={{ textAlign: "center" }}>
                green Blue Card
              </Typography>
            </h6>
          </div>
          <div className={styles.all2}>
            <h6 style={{ height: "100%", width: "250px" }}>
              <img src={red} className={styles.img3} />
              <Typography sx={{ textAlign: "center" }}>
                red Blue Card
              </Typography>
            </h6>
          </div>
          <div className={styles.all3}>
            <h6 style={{ height: "100%", width: "250px" }}>
              <img src={green} className={styles.img4} />
              <Typography sx={{ textAlign: "center" }}>
                gold Blue Card
              </Typography>
            </h6>
          </div>
          <div className={styles.all4}>
            <h6 style={{ height: "100%", width: "250px" }}>
              <img src={yellow} className={styles.img5} />
              <Typography sx={{ textAlign: "center" }}>
                yellow Blue Card
              </Typography>
            </h6>
          </div>
          <div className={styles.all5}>
            <h6 style={{ height: "100%", width: "250px" }}>
              <img src={blue} className={styles.img6} />
              <Typography sx={{ textAlign: "center" }}>
                blue Blue Card
              </Typography>
            </h6>
          </div>
        </OwlCarousel>
      </Stack>
      <Stack pb={3}>
        <Button variant="contained" onClick={handle}>
          continue
        </Button>
      </Stack>
    </Stack>
  );
}
export default Animation;
