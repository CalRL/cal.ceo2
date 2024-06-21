import * as React from "react";


export const Rest: React.FC = () => {
    return (
        <div>
            <div className="text-3xl flex py-1 text-white font-semibold">Projects</div>
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
            : Previous iteration of this website, using an API to
            display my discord status.
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
            : [WIP] An All in One plugin for Minecraft servers, specifically
            lobbies.
          </li>
        </ul>
            </div>
        </div>
    );
}

export default Rest;