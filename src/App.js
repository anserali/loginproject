import React from "react";
import "./App.css";
import Homepages from "./pages/homepage/homepage.js";
import Shoppage from "./pages/shoppage/shoppage"
import SingInsignOut from "./pages/sign-In-sign-up-page/signInPage"
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Header from './components/header/header';
import { auth, db } from './database/configDb'
import { Provider } from 'react-redux'
import store from "./redux/store"


class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      array: [
        {
          id: 1,
          title: "Hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: "shop"
        },
        {
          id: 2,
          title: "Jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          linkUrl: ""
        },
        {
          id: 3,
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkUrl: ""
        },
        {
          id: 4,
          title: "Womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          linkUrl: ""
        },
        {
          id: 5,
          title: "Mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          linkUrl: ""
        }
      ],
      currentUser: null
    };
  }
  async createDatabaseForUser(userAuth, otherparam)
  {
    let userRef = db.collection("tags").doc('OXvPX65mQk0webYJ3K2i').collection("user").doc(userAuth.uid)
    let dbRef = await userRef.get()
    const { displayName, uid } = userAuth

    if (!dbRef.exists)
    {
      db.collection("tags").doc('OXvPX65mQk0webYJ3K2i').collection("user").doc(uid).set({
        displayName,
        uid,
        ...otherparam
      })
    }
    return userRef
  }
  componentWillMount()
  {
    auth.onAuthStateChanged(async (user) =>
    {
      if (user)
      {
        const dbRef = await this.createDatabaseForUser(user)
        dbRef.onSnapshot(snapshot =>
        {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

    });
  }

  render()
  {
    return (
      <Provider store={store()}>
        <BrowserRouter>
          <Header param={this.state.currentUser} />
          <Switch>
            <Route exact path="/">
              <Homepages parameter={this.state.array} />
            </Route>
            <Route path="/shop">
              <Shoppage />
            </Route>
            <Route path="/signin">
              <SingInsignOut />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
