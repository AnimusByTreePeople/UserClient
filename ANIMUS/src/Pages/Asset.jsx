import { useState } from "react";

const App = () => {
  const [image, updateImage] = useState();
  const [prompt, updatePrompt] = useState("");
  const [loading, updateLoading] = useState();

  const generate = async (prompt) => {
    console.log(prompt);
    updateLoading(true);
    const result = await fetch(`http://127.0.0.1:8000/?prompt=${prompt}`);
    updateImage(result.data);
    console.log(result.data);
    updateLoading(false);
  };

  return (
    <div className="p-4 w-fit ">
      <div>
        <input
          value={prompt}
          placeholder="Enter the prompt "
          onChange={(e) => updatePrompt(e.target.value)}
          className="h-10 p-2"
        ></input>
        <button onClick={(e) => generate(prompt)}>Generate</button>
      </div>

      {loading ? (
        <div>Image loading...</div>
      ) : image ? (
        <image src={`data:image/png;base64,${image}`} boxShadow="lg" />
      ) : null}
    </div>
  );
};

export default App;
