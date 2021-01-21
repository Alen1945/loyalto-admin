import React from "react";
import CustomStyle from "../../assets/styles/layout.module.sass";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { Dashboard } from "../../pages/Dashboard";
const Layout: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard Loyalto</h1>
              </div>

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard Loyalto</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <Switch>
            <Route exact path="/app/dashboard" component={Dashboard} />
          </Switch>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
