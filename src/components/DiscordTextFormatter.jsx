import { useState } from "react";import { Textarea, Select, Button, CopyButton, Stack, Text } from "@mantine/core";
const DiscordTextFormatter = () => {
  const [inputText, setInputText] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("diff-red");

  const formatText = () => {
    switch (selectedFormat) {
      case "diff-red":
        return `\`\`\`diff\n- ${inputText}\n\`\`\``; // Red
      case "diff-green":
        return `\`\`\`diff\n+ ${inputText}\n\`\`\``; // Green
      case "arm-yellow":
        return `\`\`\`arm\n${inputText}\n\`\`\``; // Yellow (ARM)
      case "yaml-blue":
        return `\`\`\`yaml\n${inputText}\n\`\`\``; // Blue
      default:
        return inputText;
    }
  };
  

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <Stack>
        <Textarea
          placeholder="Enter text..."
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          autosize
          minRows={3}
        />

        <Select
          data={[
            { value: "diff-red", label: "🔴 Red (-)" },
            { value: "diff-green", label: "🟢 Green (+)" },
            { value: "arm-yellow", label: "🟡 Yellow (ARM)" },
            { value: "yaml-blue", label: "🔵 Blue (yaml)" },
          ]}
          value={selectedFormat}
          onChange={setSelectedFormat}
          style={{ marginTop: "10px" }}
        />

        <CopyButton value={formatText()}>
          {({ copied, copy }) => (
            <Button color={copied ? "teal" : "blue"} onClick={copy}>
              {copied ? "Copied!" : "Copy to Clipboard"}
            </Button>
          )}
        </CopyButton>

        <Text size="sm" weight={500}>🔍 Preview:</Text>
        <pre style={{ padding: "10px", background: "#1e1e1e", color: "white", borderRadius: "5px" }}>
          {formatText()}
        </pre>
      </Stack>
    </div>
  );
};

export default DiscordTextFormatter;