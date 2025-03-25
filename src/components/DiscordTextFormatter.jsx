import { useState } from "react";
import { Textarea, Select, Button, CopyButton } from "@mantine/core";

const DiscordTextFormatter = () => {
  const [inputText, setInputText] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("diff-red");

  const formatText = () => {
    switch (selectedFormat) {
      case "diff-red":
        return `\`\`\`diff\n- ${inputText}\n\`\`\``;
      case "diff-green":
        return `\`\`\`diff\n+ ${inputText}\n\`\`\``;
      case "fix-yellow":
        return `\`\`\`fix\n${inputText}\n\`\`\``;
      case "md-blue":
        return `\`\`\`md\n${inputText}\n\`\`\``;
      default:
        return inputText;
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <Textarea
        placeholder="Enter text..."
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <Select
        data={[
          { value: "diff-red", label: "🔴 Red (-)" },
          { value: "diff-green", label: "🟢 Green (+)" },
          { value: "fix-yellow", label: "🟡 Yellow (fix)" },
          { value: "md-blue", label: "🔵 Blue (md)" },
        ]}
        value={selectedFormat}
        onChange={setSelectedFormat}
        style={{ marginTop: "10px" }}
      />
      <CopyButton value={formatText()}>
        {({ copied, copy }) => (
          <Button color={copied ? "teal" : "blue"} onClick={copy} style={{ marginTop: "10px" }}>
            {copied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        )}
      </CopyButton>
      <pre style={{ marginTop: "10px", padding: "10px", background: "#1e1e1e", color: "white" }}>
        {formatText()}
      </pre>
    </div>
  );
};

export default DiscordTextFormatter;