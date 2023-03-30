import {
    ChakraProvider,
    Heading,
    Container,
    Text,
    Input,
    Button,
    Wrap,
    Stack, 
    Image,
    Link,
    SkeletonCircle,
    SkeletonText,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState } from "react";

  
  
  
  
  const App = () => {
    const [image, updateImage] = useState();
    const [prompt, updatePrompt] = useState();
    const [loading, updateLoading] = useState();
  
    const generate = async (prompt) => {
      updateLoading(true);
      const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`);
      updateImage(result.data);
      updateLoading(false);
    };
  
    return (
      <ChakraProvider>
        <Container>
          
  
          <Wrap margin={"100px"}>
            <Input
              value={prompt}
              placeholder="Enter the prompt "
              onChange={(e) => updatePrompt(e.target.value)}
              width={"450px"}
            ></Input>
            <Button onClick={(e) => generate(prompt)} colorScheme={"green"}>
              Generate
            </Button>
          </Wrap>
  
          {loading ? (
            <Stack>
              <SkeletonCircle />
              <SkeletonText />
            </Stack>
          ) : image ? (
            <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
          ) : null}
        </Container>
      </ChakraProvider>
    );
  };
  
  export default App;