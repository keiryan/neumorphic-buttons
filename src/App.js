import "./App.css";
import { Container, Tip } from "./styles.app.js";

import Button from "./Button/button.js";

export default function App() {
  return (
    <Container>
      <Tip>Hover and Click</Tip>
      <Button
        text="Left"
        config={{ animationOrigin: "left", backgroundColor: "#25498a" }}
      />
      <Button
        text="Top"
        config={{ animationOrigin: "top", backgroundColor: "#1C0059" }}
      />
      <Button
        text="Right"
        config={{ animationOrigin: "right", backgroundColor: "#B6498A" }}
      />
      <Button
        text="Bottom"
        config={{ animationOrigin: "bottom", backgroundColor: "#BB0200" }}
      />

      <Button text="None" />
    </Container>
  );
}
