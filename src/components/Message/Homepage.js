import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

function Homepage() {
  return (
    <>
      My Website
      <button
        onClick={() => {
          store.addNotification({
            title: "Dropbox",
            message: "Files were synced",
            type: "default", // 'default', 'success', 'info', 'warning'
            container: "bottom-left", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000,
            },
          });
        }}>
        Add notification
      </button>
    </>
  );
}

export default Homepage;
