import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from '@fortawesome/free-solid-svg-icons';
import "./SettingsBox.css";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {userLogout} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import useUserData from "../../hooks/use-user-data";

function Settings()
{
  // Get The current User with custom hook
  const {user} = useUserData();

  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

          <Button onClick={handleUserLogOut}>Logout</Button>
        </div>
      }
    </>
  )
}

export default Settings
