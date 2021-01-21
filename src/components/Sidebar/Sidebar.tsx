import React from "react";
import CustomStyle from "../../assets/styles/layout.module.sass";

const Sidebar: React.FC = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="index3.html" className="brand-link">
        <img
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{
            opacity: "0.8",
          }}
        />
        <span className="brand-text font-weight-light">Loyalto</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Loyalto admin
            </a>
          </div>
        </div>
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>Genre Movie</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-image"></i>
                <p>Movie List</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;