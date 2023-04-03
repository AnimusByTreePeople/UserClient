import { useState } from "react";
import { useAccountContext } from "../hooks/useAccountContext";
import { NavLink } from "react-router-dom";

const App = () => {
  const [image, setImage] = useState();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState();
  const { account } = useAccountContext();

  const generate = async (prompt) => {
    console.log(prompt);
    setLoading(true);
    const result = await fetch(`http://127.0.0.1:8000/?prompt=${prompt}`);
    setImage(result.data);
    console.log(result.data);
    setLoading(false);
  };
  const handleSubmitButton = async () => {
    console.log(image[0]);
    const base64 = await convertToBase64(image[0]);
    console.log(base64);
    const sendJson = {
      name: `${Date.now() + account.name}`,
      map: base64,
    };

    try {
      await fetch(`http://localhost:4000/api/maps/${account.UID}`, {
        method: "POST",
        body: JSON.stringify(sendJson),
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  if (!account) {
    return (
      <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 m-8 rounded-lg bg-gradient-to-r  from-green-800 to-teal-900 ">
        <h1 className="font-lemon p-16">PLease loggin to create an Asset</h1>
        <div className="flex justify-evenly p-16">
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button>SignUp</button>
          </NavLink>
        </div>
      </div>
    );
  } else {
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
          onChange={(e) => setImage(e.target.files)}
        />
        <button onClick={handleSubmitButton}>Submit</button>

        {loading ? (
          <div>Image loading...</div>
        ) : image ? (
          <img src={``} />
        ) : null}
      </div>
    );
  }
};

export default App;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
