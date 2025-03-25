import { useState } from "react";
import { Textarea, Select, Button, CopyButton, Stack, Text } from "@mantine/core";

const DiscordTextFormatter = () => {
  const [inputText, setInputText] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("diff-red");

  const formatText = () => {
    switch (selectedFormat) {
      case "diff-red":
        return `\`\`\`diff\n- ${inputText}\n\`\`\``; // ✅ Red
      case "diff-green":
        return `\`\`\`diff\n+ ${inputText}\n\`\`\``; // ✅ Green
      case "fix-yellow":
        return `\`\`\`fix\n${inputText}\n\`\`\``; // ✅ Yellow
      case "ini-blue": // 🔵 FIXED BLUE FORMAT
        return `\`\`\`ini\n[${inputText}]\n\`\`\``; // ✅ Blue (INI format)
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
            { value: "fix-yellow", label: "🟡 Yellow (fix)" },
            { value: "ini-blue", label: "🔵 Blue (ini)" }, // ✅ Updated Blue Format
          ]}
          value={selectedFormat}
          onChange={setSelectedFormat}
        />

        <CopyButton value={formatText()}>
          {({ copied, copy }) => (
            <Button color={copied ? "teal" : "blue"} onClick={copy}>
              {copied ? "Copied!" : "Copy to Clipboard"}
            </Button>
          )}
        </CopyButton>

        {/* Preview Section */}
        <Text size="sm" weight={500}>🔍 Preview:</Text>
        <pre style={{ padding: "10px", background: "#1e1e1e", color: "white", borderRadius: "5px" }}>
          {formatText()}
        </pre>
      </Stack>
    </div>
  );
};

export default DiscordTextFormatter;