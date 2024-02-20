import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from '@fortawesome/free-solid-svg-icons';
import "./SettingsBox.css";
import {useState} from "react";

function Settings({isLoggedIn})
{
  const [showSettings, setShowSettings] = useState(false);

  const settingBoxHandler = () =>
  {
    setShowSettings(!showSettings);
  }

  return (
    <>
      {
        isLoggedIn &&
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
        </div>
      }
    </>
  )
}

export default Settings
