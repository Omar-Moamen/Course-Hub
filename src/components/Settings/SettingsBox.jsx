import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./SettingsBox.css";
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {actUserLogout} from "../../store//authSlice/act/actUserLogout";
import Swal from "sweetalert2";
import useLocalStorage from "../../hooks/use-local-storage";
import {removeActiveClasses} from "../../util/removeActiveClasses";

function Settings()
{
  const [color, setColor] = useLocalStorage("main_color");
  const [hover, setHover] = useLocalStorage("main_hover");

  // Get The current User with custom hook
  const {user, loading} = useSelector(state => state.auth);

  const [showSettings, setShowSettings] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const settingBoxHandler = () =>
  {
    setShowSettings(!showSettings);
  }

  const handleUserLogOut = () =>
  {
    dispatch(actUserLogout())
      .unwrap()
      .then(() =>
      {
        navigate('/', {replace: true})
        setShowSettings(false);
      })
      .catch(error =>
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}!`,
        });
      })
  };


  // Effects
  useEffect(() =>
  {
    const colorEls = document.querySelectorAll('.settings-box .colors-list li');
    // Using localStorage to set the colors
    if (color && hover)
    {
      document.documentElement.style.setProperty('--mainColor', color);
      document.documentElement.style.setProperty('--mainHover', hover);

      colorEls.forEach(el =>
      {
        if (el.dataset.color === color)
        {
          removeActiveClasses(colorEls);
          el.classList.add('active');
        }
      })
    }
  }, [color, hover])

  useEffect(() =>
  {
    const colorsEls = document.querySelectorAll('.settings-box .colors-list li');
    colorsEls.forEach(el =>
    {
      el.addEventListener('click', (ev) =>
      {
        let currentEl = ev.target;

        removeActiveClasses(colorsEls);

        currentEl.classList.add('active');

        document.documentElement.style.setProperty("--mainColor", currentEl.dataset.color);

        setColor(currentEl.dataset.color);

        document.documentElement.style.setProperty("--mainHover", currentEl.dataset.hover);

        setHover(currentEl.dataset.hover);

      })
    })

  }, [setColor, setHover])

  return (
    <>
      {
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

              ></li>
              <li className="color" data-color="#e92063" data-hover="#cb1b56" ></li>
              <li className="color" data-color="#009485" data-hover="#027a6e" ></li>
              <li className="color" data-color="#02a6f2" data-hover="#0286c3" ></li>
              <li className="color" data-color="#4cae4f" data-hover="#409142"></li>
            </ul>
          </div>
          {user &&
            <>
              <Button
                id="profileBtn"
                type="button"
                variant="secondary"
                disabled={!!loading}
              >
                Profile
              </Button>
              <Button
                id="accountSettingsBtn"
                type="button"
                variant="secondary"
                disabled={!!loading}
              >
                Account Settings
              </Button>
            </>}
          {user && user?.role === "student" &&
            <>
              <Button
                id="myCoursesBtn"
                type="button"
                variant="secondary"
                disabled={!!loading}
              >
                My Courses
              </Button>

            </>
          }
          {user && user?.role === "instructor" &&
            <>
              <Button
                id="myCoursesBtn"
                type="button"
                variant="secondary"
                disabled={!!loading}
              >
                myCourses
              </Button>

            </>
          }
          {user && user?.role === "parent" &&
            <>
              <Button
                id="myChildrenBtn"
                type="button"
                variant="secondary"
                disabled={!!loading}
              >
                My Children
              </Button>
            </>
          }
          {user &&
            <Button
              id="logoutBtn"
              variant="danger"
              disabled={!!loading}
              onClick={handleUserLogOut}>
              Logout
            </Button>
          }

        </div>
      }
    </>
  )
}

export default Settings
