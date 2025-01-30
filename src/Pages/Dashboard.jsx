import React from "react";
import { Box, Typography } from "@mui/material";
import CategotyCount from "../Components/CategotyCount";
import { Padding } from "@mui/icons-material";

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
        <Typography variant="h6" color="textPrimary">
          Quick Access
        </Typography>
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
        <Typography variant="h6" color="textPrimary">
          Notifications
        </Typography>
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
        <CategotyCount />
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
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Recent Activities
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
