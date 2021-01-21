import React from "react";
import CustomStyle from "../../assets/styles/layout.module.sass";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { Dashboard } from "../../pages/Dashboard";
import { GenrePage } from "../../pages/Genre";

const WrapPage: React.FC<{
  title?: string;
}> = (props) => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">{props.title}</h1>
            </div>

            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">{props.title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">{props.children}</section>
    </div>
  );
};
const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route
          exact
          path="/app/dashboard"
          render={() => (
            <WrapPage title="Loyalto Dasboard">
              <Dashboard />
            </WrapPage>
          )}
        />
        <Route
          exact
          path="/app/genre"
          render={() => (
            <WrapPage title="Genre Movie">
              <GenrePage />
            </WrapPage>
          )}
        />
        <Route
          render={() => (
            <WrapPage title="Page Not Found">
              <h3>404</h3>
            </WrapPage>
          )}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default Layout;
