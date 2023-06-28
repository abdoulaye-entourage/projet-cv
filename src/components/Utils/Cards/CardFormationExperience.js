import React, { useEffect, useState } from "react";

import { Typography, Stack, Box } from "@mui/joy";
import CardModulesCompetences from "./CardModulesCompetences";

function CardFormationExperience({ name, structure, date, description, tags }) {
  const [isMobile, setIsMobile] = useState();
  const [isTablet, setIsTablet] = useState();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window?.innerWidth <= 768);
      setIsTablet(window?.innerWidth >= 768 && window?.innerWidth <= 1020);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      {isMobile && (
        <Box width="100%" display="flex" >
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            borderRadius=" 20px"
            border=" 1px solid #FFE7E0"
            boxShadow= "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"
            padding="15px"
            width="100%"
            height="auto"
          >
            <Stack
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="space-between"
              gap='10px'
            >
              <Box display="flex" flexDirection="column" gap="10px" >
                <Typography
                  sx={{
                    color: "#484848",
                    fontFamily: "Nunito sans",
                    fontsize: "16px",
                    lineHeight: "22px",
                    fontWeight: "700",
                    fontStyle: "normale",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Nunito sans",
                    color: "#979797",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                    
                  }}
                >
                  {structure}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#979797",
                  fontFamily: "Nunito sans",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {date}
              </Typography>
            </Stack>

            <Stack sx={{ my: 3 }}>
              <Typography
                sx={{
                  fontFamily: "Nunito sans",
                  color: "#979797",
                  fontSize: "16px",
                  lineHeight: "21.82px",
                }}
              >
                {description}
              </Typography>
            </Stack>

            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="15px">
              {tags.map((tag, index) => {
                return <CardModulesCompetences key={index} tag={tag} />;
              })}
            </Box>
          </Box>
        </Box>
      )}
      {isTablet && (
        <Box width="45%" display="flex">
          <Box
            variant="outlined"
            display="flex"
            flexDirection="column"
            flexWrap="wrap"
            borderRadius=" 20px"
            border=" 1px solid #FFE7E0"
            boxShadow= "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"
            padding="15px"
            width="100%"
            height="auto"
          >
            <Stack
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
              gap='10px'
            >
              <Box display="flex" flexDirection="column" gap='10px'>
                <Typography
                  sx={{
                    color: "#484848",
                    fontFamily: "Nunito sans",
                    fontsize: "16px",
                    lineHeight: "22px",
                    fontWeight: "700",
                    fontStyle: "normale",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Nunito sans",
                    color: "#979797",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                  }}
                >
                  {structure}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#979797",
                  fontFamily: "Nunito sans",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {date}
              </Typography>
            </Stack>

            <Stack sx={{ my: 3 }}>
              <Typography
                sx={{
                  fontFamily: "Nunito sans",
                  color: "#979797",
                  fontSize: "16px",
                  lineHeight: "21.82px",
                }}
              >
                {description}
              </Typography>
            </Stack>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="15px">
              {tags.map((tag, index) => {
                return <CardModulesCompetences key={index} tag={tag} />;
              })}
            </Box>
          </Box>
        </Box>
      )}
      {!isMobile && !isTablet && (
        <Box width="44%" display="flex" padding="10px">
          <Box
            variant="outlined"
            display="flex"
            flexDirection="column"
            borderRadius=" 20px"
            border=" 1px solid #FFE7E0"
            boxShadow= "0px 4px 4px 0px rgba(0, 0, 0, 0.15)"
            padding="15px"
            width="100%"
            height="auto"
          >
            <Stack
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box display="flex" flexDirection="column" gap='10px'>
                <Typography
                  sx={{
                    color: "#484848",
                    fontFamily: "Nunito sans",
                    fontsize: "16px",
                    lineHeight: "22px",
                    fontWeight: "700",
                    fontStyle: "normale",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Nunito sans",
                    color: "#979797",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                  }}
                >
                  {structure}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#979797",
                  fontFamily: "Nunito sans",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {date}
              </Typography>
            </Stack>
            <Stack sx={{ my: 3 }}>
              <Typography
                sx={{
                  fontFamily: "Nunito sans",
                  color: "#979797",
                  fontSize: "16px",
                  lineHeight: "21.82px",
                }}
              >
                {description}
              </Typography>
            </Stack>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap="15px">
              {tags.map((tag, index) => {
                return <CardModulesCompetences key={index} tag={tag} />;
              })}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default CardFormationExperience;
