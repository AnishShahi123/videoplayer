import { useState } from "react";
import ReactPlayer from "react-player";
import "./App.css";
import { Box, Heading, Input, Text } from "@chakra-ui/react";

function App() {
  const [url, setUrl] = useState(
    "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"
  );

  const handleInputChange = (e) => {
    setUrl(e?.target?.value);
  };

  return (
    <>
      <Box>
        <Heading>Video Player</Heading>
        <Text mt={2} mb={16}>
          Sample video url validator. Just paste your link here
        </Text>
        <Input
          placeholder="Enter your m3u8 link"
          size={"lg"}
          onChange={(e) => handleInputChange(e)}
        />
        {/* React Player */}
        <ReactPlayer
          playing
          controls
          width={"100%"}
          height={"100%"}
          style={{
            marginTop: "10px",
          }}
          url={url}
        />
      </Box>
    </>
  );
}

export default App;
