import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: "20px" }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="https://i.stack.imgur.com/XfUT0.png"
            alt="logo"
            style={{ display: "block", width: "80px" }}
          />
        </div>
        <Header as="h1">Next JS Tutorial</Header>
      </div>
      <Gnb />
    </div>
  );
}
