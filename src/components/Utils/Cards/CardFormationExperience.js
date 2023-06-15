import React, { useEffect, useState } from "react";

import { Typography, Stack, Box } from "@mui/joy";
import CardModulesCompetences from "./CardModulesCompetences";

function CardFormationExperience({ name, structure, date, description, tags }) {
  const [isMobile, setIsMobile] =useState(window.innerWidth)
  const [isTablet, setIsTablet] =useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window?.innerWidth <=768);
      setIsTablet(window?.innerWidth >= 768 && window?.innerWidth <= 1020)
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
console.log('isMobile:',isMobile,'isTablet:', isTablet)
 
  return (
    <Box>
      {isMobile && (
        <Box
          variant="outlined"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flexWrap="wrap"
          border="1px solid rgba(238, 95, 54, 0.1)"
          boxShadow="4px 4px 1px rgba(238, 95, 54, 0.1)"
          borderRadius={10}
          padding="15px"
          width="auto"
        >
          <Stack
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Typography display="flex" flexDirection="column">
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                {name}
              </Typography>
              <Typography level="body2">{structure}</Typography>
            </Typography>

            <Typography>{date}</Typography>
          </Stack>

          <Stack sx={{ my: 3 }}>
            <Typography>{description}</Typography>
          </Stack>

          <Box>
            <Stack
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="15px"
            >
              {tags.map((tag, index) => {
                return <CardModulesCompetences key={index} tag={tag} />;
              })}
            </Stack>
          </Box>
        </Box>
      )}
      {isTablet && (
        <Box
          variant="outlined"
          display="flex"
          flexDirection="column"
          flexWrap='wrap'
          border="1px solid rgba(238, 95, 54, 0.1)"
          boxShadow="4px 4px 1px rgba(238, 95, 54, 0.1)"
          borderRadius={10}
          padding="15px"
          width="25rem"
        >
          <Stack
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Typography display="flex" flexDirection="column">
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                {name}
              </Typography>
              <Typography level="body2">{structure}</Typography>
            </Typography>

            <Typography>{date}</Typography>
          </Stack>

          <Stack sx={{ my: 3 }}>
            <Typography>{description}</Typography>
          </Stack>

          <Box>
            <Stack
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="15px"
            >
              {tags.map((tag, index) => {
                return <CardModulesCompetences key={index} tag={tag} />;
              })}
            </Stack>
          </Box>
        </Box>
      )}
      {!isMobile && !isTablet && (
        <Box
          variant="outlined"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          border="1px solid rgba(238, 95, 54, 0.1)"
          boxShadow="4px 4px 1px rgba(238, 95, 54, 0.1)"
          borderRadius={10}
          padding="15px"
          width='90%'
        >
          <Stack
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Typography display="flex" flexDirection="column">
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                {name}
              </Typography>
              <Typography level="body2">{structure}</Typography>
            </Typography>

            <Typography>{date}</Typography>
          </Stack>

          <Stack sx={{ my: 3 }}>
            <Typography>{description}</Typography>
          </Stack>

          <Box>
            <Stack
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="15px"
            >
              {tags.map((tag, index) => {
                return <CardModulesCompetences key={index} tag={tag} />;
              })}
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CardFormationExperience;                 
