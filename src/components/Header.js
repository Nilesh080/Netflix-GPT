import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Netflix_logo, supportedLanguages } from "../utils/constant";
import { User_logo } from "../utils/constant";
import { toggleGptButton } from "../utils/gptSlice";
import { addLanguage } from "../utils/configureSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const gptSearchPage = useSelector((state) => state?.gpt?.gptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the compoinent unmounts
    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    dispatch(toggleGptButton());
  };

  const handleLanguageChange = (e) => {
    dispatch(addLanguage(e.target.value));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between absolute z-10 p-4 w-screen bg-gradient-to-b from-black">
      <img className="w-44 mx-auto md:mx-0" src={Netflix_logo} alt="Netflix-logo" />
      {user && (
        <div className="flex p-0 md:p-4 justify-between">
          {gptSearchPage && (
            <select
              className="p-2 mr-6 bg-blue-950 text-white rounded-lg bg-opacity-80"
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map((lang) => (
                <option className="bg-opacity-40" value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleClick}
            className="text-sm font-semibold md:text-lg p-2 mr-6 bg-purple-700 text-white hover:bg-purple-500 rounded-lg"
          >
            { gptSearchPage ? "HomePage" : "GPT-Search" }
          </button>
          <img className="hidden md:inline-block w-12 h-12 rounded-lg" src={User_logo} alt="user logo" />
          <button onClick={handleSignOut} className="p-2 bg-red-200 rounded-full mr-2 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
