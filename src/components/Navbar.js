
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

export class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isCollapsed: true,
        };
    }

    handleToggleClick = () => {
        this.setState((prevState) => ({
            isCollapsed: !prevState.isCollapsed,
        }));
    };

    handleLinkClick = () => {
        this.setState({
            isCollapsed: true,
        });
    };
    

    render() {
        // const { isCollapsed } = this.state;

        return (
            <nav className={`navbar navbar-expand-lg fixed-top navbar-${this.props.color} bg-${this.props.color}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/" onClick={this.handleLinkClick}>Newsy</Link>
                    <button
                        className={`navbar-toggler ${this.props.isCollapsed ? '' : 'collapsed'}`}
                        style={{ filter: this.props.filter }}
                        type="button"
                        onClick={this.handleToggleClick}
                        aria-controls="navbarSupportedContent"
                        aria-expanded={!this.state.isCollapsed}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Collapse in={!this.state.isCollapsed}>
                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" onClick={this.handleLinkClick}>
                                    <Link className="nav-link text-light" aria-current="page" to="/business">
                                        Business
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={this.handleLinkClick}>
                                    <Link className="nav-link text-light" aria-current="page" to="/entertainment">
                                        Entertainment
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={this.handleLinkClick}>
                                    <Link className="nav-link text-light" aria-current="page" to="/health">
                                        Health
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={this.handleLinkClick}>
                                    <Link className="nav-link text-light" aria-current="page" to="/science">
                                        Science
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={this.handleLinkClick}>
                                    <Link className="nav-link text-light" aria-current="page" to="/sports">
                                        Sports
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={this.handleLinkClick}>
                                    <Link className="nav-link text-light" aria-current="page" to="/technology">
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                            <div className="form-check form-switch themeImg">
                                <img src={this.props.ThemeSrc}
                                    alt='themeImg'
                                    style={{ cursor: 'pointer' }}
                                    onClick={this.props.toggleMode} />
                            </div>
                            <div className="d-flex" role="search">
                                <input className="form-control me-2"  onChange={this.props.handleSearch} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-light">
                                    Search
                                </button>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </nav>
        );
    }
}

export default Navbar;