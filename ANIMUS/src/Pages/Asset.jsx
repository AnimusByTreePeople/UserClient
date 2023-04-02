import { useState } from "react";

const App = () => {
  const [image, setImage] = useState();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState();

  const generate = async (prompt) => {
    console.log(prompt);
    setLoading(true);
    const result = await fetch(`http://127.0.0.1:8000/?prompt=${prompt}`);
    setImage(result.data);
    console.log(result.data);
    setLoading(false);
  };
  const handleSubmitButton = async () => {
    console.log(image);
    const base64 = await convertToBase64(image);
  };

  return (
    <div>
      <div>
        <input
          value={prompt}
          placeholder="Enter the prompt "
          onChange={(e) => setPrompt(e.target.value)}
          className="h-10 p-2"
        ></input>
        <button onClick={(e) => generate(prompt)}>Generate</button>
      </div>
      <input
        type="file"
        name="uploaded_file"
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleSubmitButton}>Submit</button>

      {loading ? <div>Image loading...</div> : image ? <img src={``} /> : null}
    </div>
  );
};

export default App;
