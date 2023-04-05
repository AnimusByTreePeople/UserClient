import { useState } from "react";
import { useAccountContext } from "../hooks/useAccountContext";
import { NavLink } from "react-router-dom";
import Logo from "../assets/ANIMUS.svg";

import axios from "axios";
const App = () => {
  const [image, setImage] = useState();
  const [file, setFile] = useState();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState();
  const [upload, setUpload] = useState(null);
  const [error, setError] = useState(null);
  const [baseModel, setBaseModel] = useState(null);
  const { account } = useAccountContext();

  const generate = async (prompt) => {
    console.log(prompt);
    setLoading(true);
    const resultString = prompt + "texture UV map";
    try {
      const result = await axios(
        `http://127.0.0.1:8000/?prompt=${resultString}`
      );
      console.log(result);
      const base64 = "data:image/png;base64," + result.data;
      setLoading(false);
      setImage(base64);
      console.log(base64);
    } catch (e) {
      setError(e.message);
    }
  };
  const handleShowButton = async () => {
    const img = await fetch(
      `https://animus-production.up.railway.app/api/maps/${account.UID}`
    );
    const data = await img.json();
    console.log(data.map);
    if (data) {
      setImage(data.map);
    }
  };
  const handleSubmitButton = async () => {
    console.log(file[0]);
    const base64 = await convertToBase64(file[0]);
    saveImage(base64);
  };

  const uploadImage = () => {
    if (upload) {
      return (
        <div className="flex flex-col py-4">
          <h1 className="m-1">
            Upload your own image below for a "{`${baseModel}`}" Skin
          </h1>
          <input
            type="file"
            name="uploaded_file"
            onChange={(e) => setFile(e.target.files)}
            className="h-10 p-2 mb-4"
          />
          <button onClick={handleSubmitButton}>Submit</button>
        </div>
      );
    } else {
      return (
        <div className="flex items-center">
          <h1 className="m-1">Or you can upload your own image,</h1>
          <button className="m-4" onClick={(e) => setUpload(true)}>
            Upload Image
          </button>
        </div>
      );
    }
  };

  const selectBaseModel = () => {
    const showSaveButton = () => {
      if (image) {
        return (
          <button className="m-4" onClick={(e) => saveImage(image)}>
            Save Image
          </button>
        );
      } else {
        return <></>;
      }
    };
    if (baseModel) {
      return (
        <div className="flex flex-col py-4">
          <h1 className="font-lemon text-3xl text-center">
            Enter any text of your imagination and Animus AI will generate the
            skin for you
          </h1>
          <h1 className="m-1">
            keep in mind you are creating a Skin for the {`${baseModel}`}{" "}
          </h1>
          <input
            value={prompt}
            placeholder="Enter the prompt "
            onChange={(e) => setPrompt(e.target.value)}
            className="h-10 p-2 mb-4"
          ></input>
          <button className="m-4" onClick={(e) => generate(prompt)}>
            Generate
          </button>
          {showSaveButton()}
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center m-4">
          <h1 className="font-lemon text-3xl text-center m-1">
            Generate unique skins for your Stuff in Game!{" "}
          </h1>
          <h1>Select the base model</h1>
          <button
            className="m-4 h-20 w-20"
            onClick={(e) => setBaseModel("Sphere")}
          >
            Sphere
          </button>
        </div>
      );
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
        <NavLink to="/">
          <img className="h-1/5" src={Logo} alt="title" />
        </NavLink>
        <div className="flex flex-col shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-16 m-8 items-center rounded-lg bg-gradient-to-r  from-green-800 to-teal-900 ">
          <h1 className="text-red-600">
            {error
              ? "Error with AI model Please Send us A message through our Social media pages."
              : ""}
          </h1>
          {selectBaseModel()}
          {uploadImage()}
          <button className="h-10 p-2 m-4" onClick={handleShowButton}>
            Show Image
          </button>
          <h1>-200 leafs to save an image</h1>

          {loading ? (
            <div>Image loading...</div>
          ) : image ? (
            <img src={image} />
          ) : null}
        </div>
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
const saveImage = async (base64) => {
  const sendJson = {
    name: `${Date.now() + account.name}`,
    map: base64,
  };
  const URL = `https://animus-production.up.railway.app/api/maps/${account.UID}`;
  const accURL = `https://animus-production.up.railway.app/api/accounts/${account.UID}`;
  //reduce currency
  const reducedCurrency = {
    currency: account.currency - 200,
  };
  try {
    await fetch(accURL, {
      method: "PUT",
      body: JSON.stringify(reducedCurrency),
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log(e.message);
  }
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
