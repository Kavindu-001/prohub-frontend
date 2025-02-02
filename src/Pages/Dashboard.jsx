import React from "react";
import { Box } from "@mui/material";
import "../Styles/Dashboard2.css";
const Dashboard = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      sx={{
        overflowY: "auto",
        maxHeight: "84vh",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {/* ROW 1 */}
      <Box
        sx={{
          gridColumn: "span 8",
          gridRow: "span 2",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        
      </Box>

      {/* ROW 2 */}
      <Box
        gridColumn="span 4"
        gridRow="span 1"
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 1"
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
      </Box>

      {/* ROW 3 */}
      <Box
        gridColumn="span 6"
        gridRow="span 2"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "15px",
        }}
      >
      <div className="aboutTrainersContainer">
        <h1 className="aboutTrainers">
          About Trainers 
        </h1>
      </div>
      </Box>
      <Box
        gridColumn="span 6"
        gridRow="span 2"
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          padding: "10px",
        }}
      >
      <div className="ActivityStatusContainer">
        <h1 className="ActivityStatus">
         Avtivity Status
        </h1>
      </div>

      </Box>
    </Box>
  );
};

export default Dashboard;
