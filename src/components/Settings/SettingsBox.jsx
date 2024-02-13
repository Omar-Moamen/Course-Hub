import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from '@fortawesome/free-solid-svg-icons';
import "./SettingsBox.css";
import {useState} from "react";

function Settings()
{
  const [showSettings, setShowSettings] = useState(false);

  const settingBoxHandler = () =>
  {
    setShowSettings(!showSettings);
  }

  return (
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
  )
}

export default Settings
