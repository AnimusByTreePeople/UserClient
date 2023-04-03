import { useState } from "react";
import { useAccountContext } from "../hooks/useAccountContext";
import { NavLink } from "react-router-dom";

const App = () => {
  const [image, setImage] = useState();
  const [file, setFile] = useState();
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
  const handleShowButton = async () => {
    const img = await fetch(`http://localhost:4000/api/maps/${account.UID}`);
    const data = await img.json();
    console.log(data.map);
    if (data) {
      setImage(data.map);
    }
  };
  const handleSubmitButton = async () => {
    console.log(file[0]);
    const base64 = await convertToBase64(file[0]);
    const sendJson = {
      name: `${Date.now() + account.name}`,
      map: base64,
    };
    const URL = `http://localhost:4000/api/maps/${account.UID}`;
    const img = await fetch(URL);
    const data = await img.json();
    if (data) {
      try {
        await fetch(URL, {
          method: "PUT",
          body: JSON.stringify(sendJson),
          headers: { "Content-Type": "application/json" },
        });
      } catch (e) {
        console.log(e.message);
      }
    } else {
      try {
        await fetch(URL, {
          method: "POST",
          body: JSON.stringify(sendJson),
          headers: { "Content-Type": "application/json" },
        });
      } catch (e) {
        console.log(e.message);
      }
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
      <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-16 m-8 rounded-lg bg-gradient-to-r  from-green-800 to-teal-900 ">
        <div className="flex flex-col py-4">
          <input
            value={prompt}
            placeholder="Enter the prompt "
            onChange={(e) => setPrompt(e.target.value)}
            className="h-10 p-2 mb-4"
          ></input>
          <button onClick={(e) => generate(prompt)}>Generate</button>
        </div>
        <div className="flex flex-col py-4">
          <input
            type="file"
            name="uploaded_file"
            onChange={(e) => setFile(e.target.files)}
            className="h-10 p-2 mb-4"
          />
          <button onClick={handleSubmitButton}>Submit</button>
        </div>
        <button className="h-10 p-2 mb-4" onClick={handleShowButton}>
          Show Image
        </button>

        {loading ? (
          <div>Image loading...</div>
        ) : image ? (
          <img src={image} />
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
