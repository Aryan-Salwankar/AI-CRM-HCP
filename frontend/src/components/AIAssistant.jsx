import { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";

function AIAssistant() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi! Tell me about your HCP interaction.",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: input,
      },
      {
        sender: "ai",
        text: "✅ Interaction received. (Backend integration coming next)",
      },
    ]);

    setInput("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        minHeight: 700,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        align="center"
      >
        🤖 AI Assistant
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mb: 2 }}
      >
        Describe your interaction in natural language.
      </Typography>

      <Box
        sx={{
          flex: 1,
          border: "1px solid #ddd",
          borderRadius: 2,
          p: 2,
          overflowY: "auto",
          bgcolor: "#fafafa",
          mb: 2,
        }}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                msg.sender === "user"
                  ? "flex-end"
                  : "flex-start",
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                maxWidth: "80%",
                bgcolor:
                  msg.sender === "user"
                    ? "#1976d2"
                    : "#e0e0e0",
                color:
                  msg.sender === "user"
                    ? "white"
                    : "black",
              }}
            >
              {msg.text}
            </Box>
          </Box>
        ))}
      </Box>

      <TextField
        multiline
        rows={3}
        fullWidth
        placeholder="Type your interaction here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSend}
      >
        Log with AI
      </Button>
    </Paper>
  );
}

export default AIAssistant;