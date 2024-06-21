import * as React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "../App.css";
import { FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";
import { SiSpigotmc } from "react-icons/si";

export const BadgesComponent: React.FC = () => {
  return (
    <Grid className="badges" display="flex">
      <GridItem className="px-2">
        <a href="https://github.com/CalRL" target="_blank" className="text-coloring h-[24px] w-[24px] hover:text-white transition-colors duration-[250ms]">
          <FaGithub size={24} />
        </a>
      </GridItem>
      <GridItem className="px-2">
        <a href="https://discord.cal.ceo" target="_blank" className="text-coloring h-[24px] w-[24px] hover:text-white transition-colors duration-[250ms]">
          <FaDiscord size={24} />
        </a>
      </GridItem>
      <GridItem className="px-2">
        <a href="https://www.linkedin.com/in/callum-burns-o-regan-519451258/" target="_blank" className="text-coloring h-[24px] w-[24px] hover:text-white transition-colors duration-[250ms]">
          <FaLinkedin size={24} />
        </a>
      </GridItem>
      <GridItem className="px-2">
        <a href="https://www.spigotmc.org/members/husku.501133/" target="_blank" className="text-coloring h-[24px] w-[24px] hover:text-white transition-colors duration-[250ms]">
          <SiSpigotmc size={24} />
        </a>
      </GridItem>
    </Grid>
  );
};
