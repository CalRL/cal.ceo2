import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import {
  SiTypescript,
  SiNextdotjs,
  SiCsharp,
  SiMicrosoftazure,
  SiTailwindcss,
  SiChakraui,
  SiSpigotmc,
} from "react-icons/si";
import { FaJava, FaPython, FaNodeJs, FaReact } from "react-icons/fa6";

export const RestAccordion: React.FC = () => {
  return (
    <div className="text-coloring">
      <Accordion allowMultiple={false} defaultIndex={0}>
        <AccordionItem border="none">
          <div>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl text-white font-semibold"
              >
                Projects
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </div>
          <AccordionPanel pb={4}>
            <div className="text-coloring my-4">
              <p>
                Most of my projects are on{" "}
                <a
                  href="https://github.com/CalRL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#ADD8E6]"
                >
                  github
                </a>{" "}
                although most of it is privated.
              </p>
              <ul className="list-disc list-inside mt-4 text-left">
                <li>
                  <a
                    href="https://github.com/CalRL/ShiroJS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ADD8E6] hover:underline"
                  >
                    ShiroJS
                  </a>
                  : A discord bot made in JavaScript using discord.js.
                </li>
                <li>
                  <a
                    href="https://github.com/CalRL/JustAnotherChatRoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ADD8E6] hover:underline"
                  >
                    JustAnotherChatRoom
                  </a>
                  : A socket/websocket chat room made in Java for a university
                  project.
                </li>
                <li>
                  <a
                    href="https://github.com/CalRL/cal.ceo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ADD8E6] hover:underline"
                  >
                    cal.ceo
                  </a>
                  : Previous iteration of this website, using an API to display
                  my discord status.
                </li>
                <li>
                  <a
                    href="https://github.com/CalRL/Hubbly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ADD8E6] hover:underline"
                  >
                    Hubbly
                  </a>
                  : [WIP] An All in One plugin for Minecraft servers,
                  specifically lobbies.
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none">
          <div>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                className="text-2xl text-white font-semibold"
              >
                Skills
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </div>
          <AccordionPanel pb={4}>
            <div className="space-y-4">
              <div className="text-2xl justify-center flex text-white font-semibold">
                Web:
              </div>
              <div className="flex space-x-3 justify-center">
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <SiTypescript size={36} />
                </a>

                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <SiTailwindcss size={36} />
                </a>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <SiNextdotjs size={36} />
                </a>

                <a
                  href="https://react.dev/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <FaReact size={36} />
                </a>

                <a
                  href="https://v2.chakra-ui.com/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <SiChakraui size={36} />
                </a>

                <a
                  href="https://nodejs.org/en"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <FaNodeJs size={36} />
                </a>
                
              </div>
              <div className="text-2xl justify-center flex text-white font-semibold">
                Other:
              </div>
              <div className="flex space-x-3 justify-center">
              <a
                  href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <SiCsharp size={36} />
                </a>
                
                <a
                  href="https://www.java.com/en/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <FaJava size={36} />
                </a>
                
                <a
                  href="https://www.spigotmc.org/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <SiSpigotmc size={36} />
                </a>
                
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <FaPython size={36} />
                </a>
                
                <a
                  href="https://azure.microsoft.com/en-us"
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                  <SiMicrosoftazure size={36} />
                </a>
                
                {/* <a
                  href=""
                  target="_blank"
                  className="hover:text-white transition-color duration-[250ms]"
                >
                   
                </a>*/}
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
// import { SiTypescript, SiNextdotjs, SiCsharp, SiMicrosoftazure } from "react-icons/si";
//import { FaJava, FaPython } from "react-icons/fa6";
export default RestAccordion;
