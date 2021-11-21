import { store } from 'react-notifications-component';

const sendNotification = (message, type = 'info') => {
    const notification = {
        // title: "Error!",
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        dismiss: {
            duration: 2500,
            onScreen: true
        },
        animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
        animationOut: ["animate__animated animate__fadeOut"] // `animate.css v4` classes
    };

    store.addNotification(notification);
}

export default sendNotification;