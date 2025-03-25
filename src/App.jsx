import React from "react";
import { MantineProvider } from "@mantine/core";
import DiscordTextFormatter from "./components/DiscordTextFormatter";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <DiscordTextFormatter />
    </MantineProvider>
  );
}

export default App;