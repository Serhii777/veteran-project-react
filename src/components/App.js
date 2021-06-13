import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

import AuthProvider from "./Auth/AuthProvider";

import Layout from "./Layout/Layout";
import Spinner from './Spinner'
// import Main from "./Main/Main";
// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import routes from "../routes";

// import PrivateRoute from "./Routes/PrivateRoute";
// import PublicRoute from "./Routes/PublicRoute";

function App({ isLoadingContent }) {
  return (
    <AuthProvider>
      {/* <ReactNotification /> */}
      <Layout>
        {/* <Suspense fallback={<h2>Loading...</h2>}> */}
        <Suspense fallback={<Spinner />}>
          {isLoadingContent && <h2>Loading...</h2>}
          {/* <Suspense fallback={<Spinner />}> */}
          <Switch>
            {routes.map(
              (route) => (
                // console.log("route:", route),
                <Route key={route.label} {...route} />
              )
              // route.public ? (
              //   <PrivateRoute key={route.label} {...route} />
              // ) : (
              //   <PublicRoute key={route.label} {...route} />
              // )
            )}
          </Switch>
        </Suspense>
      </Layout>
    </AuthProvider>
  );
}

const mapStateToProps = (state) => ({
  isLoadingContent: state.auth.loading,
});

export default connect(mapStateToProps)(App);


// const friendList = [
//   { id: 1, name: 'Phoebe' },
//   { id: 2, name: 'Rachel' },
//   { id: 3, name: 'Ross' },
// ];

// function ChatRecipientPicker() {
//   const [recipientID, setRecipientID] = useState(1);
//   const isRecipientOnline = useFriendStatus(recipientID);

//   return (
//     <>
//       <Circle color={isRecipientOnline ? 'green' : 'red'} />
//       <select
//         value={recipientID}
//         onChange={e => setRecipientID(Number(e.target.value))}
//       >
//         {friendList.map(friend => (
//           <option key={friend.id} value={friend.id}>
//             {friend.name}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// }