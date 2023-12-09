import * as React from "react";
import "../App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";

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
                    >
                        <img
                            className="rounded-full border-4 avatar-border avatar"
                            width="96px"
                            height="96px"
                            src="https://cdn.discordapp.com/avatars/242276511028084738/66b26bbc03c85fa6659b6ae21c8ff485.png?size=96"
                        ></img>
                    </GridItem>
                    <GridItem
                        area={"name"}
                        className="text-5x1"
                        fontWeight="bold"
                    >
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
                    >
                        <span className="circle status-circle online-circle"></span>
                        <span className="margin-top-10">Online</span>
                    </GridItem>
                </Grid>

                <div className="text-3x1 text-coloring">
                    software developer; student; aimer;
                </div>
                <div className="text-paragraph text-coloring margin-top-10">
                    hi! I'm cal! I'm a software developer and student from the
                    united kingdom. I'm mostly interested in front end web
                    development, but i also do some backend work too.
                </div>
            </div>
        </div>
    );
};
