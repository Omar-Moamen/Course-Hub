import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from '@fortawesome/free-solid-svg-icons';
import "./SettingsBox.css";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../store/authSlice";
import Swal from "sweetalert2";
import useLocalStorage from "../../hooks/use-local-storage";

function Settings()
{
  const [color, setColor] = useLocalStorage("main_color");
  const [hover, setHover] = useLocalStorage("main_hover");

  // Get The current User with custom hook
  const {user, authLoading} = useSelector(state => state.auth);

  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();

  const settingBoxHandler = () =>
  {
    setShowSettings(!showSettings);
  }

  const handleUserLogOut = () =>
  {
    dispatch(userLogout())
      .unwrap()
      .catch(error =>
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}!`,
        });
      })
  };

  const setColorHandler = (e) =>
  {
    let currentEl = e.target;

    document.documentElement.style.setProperty("--mainColor", currentEl.dataset.color);

    setColor(currentEl.dataset.color);

    document.documentElement.style.setProperty("--mainHover", currentEl.dataset.hover);

    setHover(currentEl.dataset.hover);
  }

  // Effects
  useEffect(() =>
  {
    // Using localStorage to set the colors
    if (color && hover)
    {
      document.documentElement.style.setProperty('--mainColor', color);
      document.documentElement.style.setProperty('--mainHover', hover);
    }
  }, [color, hover])

  useEffect(() =>
  {
    const colorsOptions = document.querySelectorAll('.colors-list li');
    console.log(colorsOptions)
  }, [])

  return (
    <>
      {
        user &&
        <div className={`settings-box position-fixed bg-body ${showSettings && "opened"}`}>
          <div className="
      settings-toggler
      position-absolute
      d-flex
      bg-body
      align-items-center
      justify-content-center"
            onClick={settingBoxHandler}
          >
            <div className=" bg-body"></div>
            <FontAwesomeIcon icon={faGear} spin={showSettings && true} />
          </div>

          <div className="option-box">
            <h4>Colors</h4>
            <ul className="colors-list list-unstyled d-flex align-items-center justify-content-center">
              <li
                className="color"
                data-color="hsl(13, 89%, 59%)"
                data-hover="hsl(var(--mainColor-h), var(--mainColor-s), calc(var(--mainColor-s) - 45%))"
                onClick={setColorHandler}
              ></li>
              <li className="color" data-color="#e92063" data-hover="#cb1b56" onClick={setColorHandler}></li>
              <li className="color" data-color="#009485" data-hover="#027a6e" onClick={setColorHandler}></li>
              <li className="color" data-color="#02a6f2" data-hover="#0286c3" onClick={setColorHandler}></li>
              <li className="color" data-color="#4cae4f" data-hover="#409142" onClick={setColorHandler}></li>
            </ul>
          </div>
          <Button
            id="Logout"
            variant="danger"
            disabled={!!authLoading}
            onClick={handleUserLogOut}>
            Logout
          </Button>
        </div>
      }
    </>
  )
}

export default Settings
