import * as React from "react";
import { useEffect } from "react";
import "../App.css";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { BadgesComponent } from "./BadgesComponent";
const url = "https://api.lanyard.rest/v1/users/242276511028084738";

export const MainComponent: React.FC = () => {
  return (
    <div className="main">
      <div className="margin-top-10 div-sizing">
        <Grid
          templateAreas={`"avatar name pronouns"
                                "avatar status status"`}
          h="128px"
          w="300px"
          className="main-grid"
        >
          <GridItem
            area={"avatar"}
            className="items-center avatar"
            display="inline-block"
            justifyContent={"center"}
            marginRight="10%"
          >
            <img
              className="rounded-full border-4 avatar-border avatar"
              width="96px"
              height="96px"
              src="https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=4096"
              alt="Discord Avatar"
            ></img>
          </GridItem>
          <GridItem area={"name"} className="text-5x1" fontWeight="bold">
            Cal
          </GridItem>
          <GridItem
            area={"pronouns"}
            className="text-2x1 pronouns-text"
            marginTop="10%"
            marginLeft="-10%"
            fontWeight={700}
          >
            he/him
          </GridItem>
          <GridItem
            area={"status"}
            className="text-3x1"
            fontWeight={600}
            marginTop="-10%"
            display="inline-flex"
          >
            <StatusCircle />
            <span className="status-fix">
              <GetColor />
            </span>
          </GridItem>
        </Grid>

        <div className="text-3x1 text-coloring">
          software developer; student; full-stack;
        </div>
        <div className="text-paragraph text-coloring margin-top-10">
          hi! I'm cal! I'm a software developer and student from the united
          kingdom. I'm mostly interested in front end web development, <br></br>
          but i also do some backend work too.
        </div>
        <BadgesComponent />
      </div>
    </div>
  );
};

const GetColor: React.FC = () => {
  const [status, setStatus] = React.useState<string>();

  useEffect(() => {
    const getDiscordInfomation = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const data = await response.json();
        const discordStatus = data.data.discord_status;
        setStatus(discordStatus);
      } catch (error) {
        console.error("Error fetching Discord information", error);
      }
    };

    getDiscordInfomation();
  }, []);
  var statusString: string = "";
  if (typeof status === "string") {
    statusString = status.charAt(0).toUpperCase() + status.slice(1);
  }
  return (
    <Text
      display="inline"
      color={status === "online" ? "#8EFF9B" : "#FF6565"}
      className="status-fix"
    >
      {statusString}
    </Text>
  );
};

// <span className="circle status-circle online-circle"></span>
export const StatusCircle: React.FC = () => {
  const [status, setStatus] = React.useState<string>();

  useEffect(() => {
    const getDiscordInfomation = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const data = await response.json();
        const discordStatus = data.data.discord_status;
        setStatus(discordStatus);
      } catch (error) {
        console.error("Error fetching Discord information", error);
      }
    };

    getDiscordInfomation();
  }, []);

  return (
    <span
      className={`circle status-circle ${
        status === "online" ? "online-circle" : "offline-circle"
      }`}
    ></span>
  )
};