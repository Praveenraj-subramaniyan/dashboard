import React, { useEffect } from 'react';
import "./App.css";
import undraw_rocket from "./img/undraw_rocket.svg";
// import "./scss/navs/_sidebar.scss";
import charts from './charts';
const Sidebar = () => {
  useEffect(() => {
    const handleSidebarToggle = () => {
      document.body.classList.toggle("sidebar-toggled");
      document.querySelector(".sidebar").classList.toggle("toggled");
      if (document.querySelector(".sidebar").classList.contains("toggled")) {
        document.querySelectorAll('.sidebar .collapse').forEach((collapse) => {
          collapse.classList.remove('show');
        });
      }
    };

    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        document.querySelectorAll('.sidebar .collapse').forEach((collapse) => {
          collapse.classList.remove('show');
        });
      }
      if (window.innerWidth < 480 && !document.querySelector(".sidebar").classList.contains("toggled")) {
        document.body.classList.add("sidebar-toggled");
        document.querySelector(".sidebar").classList.add("toggled");
        document.querySelectorAll('.sidebar .collapse').forEach((collapse) => {
          collapse.classList.remove('show');
        });
      }
    };

    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      if (scrollDistance > 100) {
        document.querySelector('.scroll-to-top').style.display = 'block';
      } else {
        document.querySelector('.scroll-to-top').style.display = 'none';
      }
    };

    const handleScrollToTop = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    };

    document.querySelector("#sidebarToggle").addEventListener('click', handleSidebarToggle);
    document.querySelector("#sidebarToggleTop").addEventListener('click', handleSidebarToggle);
    window.addEventListener('resize', handleWindowResize);
    document.addEventListener('scroll', handleScroll);
    document.querySelectorAll('a.scroll-to-top').forEach((link) => {
      link.addEventListener('click', handleScrollToTop);
    });

    return () => {
      document.querySelector("#sidebarToggle").removeEventListener('click', handleSidebarToggle);
      document.querySelector("#sidebarToggleTop").removeEventListener('click', handleSidebarToggle);
      window.removeEventListener('resize', handleWindowResize);
      document.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('a.scroll-to-top').forEach((link) => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);

  return (
    <div className="sidebar">
  <ul classNameName="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    {/* Sidebar brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">
        SB Admin <sup>2</sup>
      </div>
    </a>
    
    {/* Sidebar Divider */}
    <hr className="sidebar-divider my-0" />

    {/* Dashboard */}
    <li className="nav-item active">
      <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </a>
    </li>

    {/* Interface */}
    <hr className="sidebar-divider" />
    <div className="sidebar-heading">Interface</div>

    {/* Components */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>Components</span>
      </a>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Components:</h6>
          <a className="collapse-item" href="buttons.html">Buttons</a>
          <a className="collapse-item" href="cards.html">Cards</a>
        </div>
      </div>
    </li>

    {/* Utilities */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
      </a>
      <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Custom Utilities:</h6>
          <a className="collapse-item" href="utilities-color.html">Colors</a>
          <a className="collapse-item" href="utilities-border.html">Borders</a>
          <a className="collapse-item" href="utilities-animation.html">Animations</a>
          <a className="collapse-item" href="utilities-other.html">Other</a>
        </div>
      </div>
    </li>

    {/* Addons */}
    <hr className="sidebar-divider" />
    <div className="sidebar-heading">Addons</div>

    {/* Pages */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
        aria-expanded="true" aria-controls="collapsePages">
        <i className="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
      <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Login Screens:</h6>
          <a className="collapse-item" href="login.html">Login</a>
          <a className="collapse-item" href="register.html">Register</a>
          <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
          <div className="collapse-divider"></div>
          <h6 className="collapse-header">Other Pages:</h6>
          <a className="collapse-item" href="404.html">404 Page</a>
          <a className="collapse-item" href="blank.html">Blank Page</a>
        </div>
      </div>
    </li>

  <charts/>

  
    <li className="nav-item">
      <a className="nav-link" href="charts.html">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Charts</span>
      </a>
    </li>

    {/* Tables */}
    <li className="nav-item">
      <a className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table"></i>
        <span>Tables</span>
      </a>
    </li>

    {/* Scroll to Top */}
    <hr className="sidebar-divider d-none d-md-block" />
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    {/* Sidebar Card */}
    <div className="sidebar-card d-none d-lg-flex">
      <img className="sidebar-card-illustration mb-2" src={undraw_rocket} alt="undraw_rocket" />
      <p className="text-center mb-2">
        <strong>SB Admin Pro</strong> is packed with premium features, components, and more!
      </p>
      <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">
        Upgrade to Pro!
      </a>
    </div>
  </ul>
</div>
  );
};

export default Sidebar;
