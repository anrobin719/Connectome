import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const cx = classNames.bind(styles);

class Toolbar extends Component {
    state = {
        searchValue: ''
    }

    inputChangedHandler = (e) => {
        this.setState({searchValue: e.target.value});
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        this.props.submitHandler(this.state.searchValue);
    }

    render() {
        const {onShowModal, onLogout, isAuthenticated} = this.props;
        return (
            <header className={cx('Toolbar')}>
                <div className={cx('content')}>
                    <NavLink activeClassName={cx('logo')} to="/">
                        <span>⎈</span>
                        <span> connectome</span>
                    </NavLink>
                    
                    <div className={cx('search')}>
                        <div className={cx('searchIcon')}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={this.submitHandler}>
                            <input
                                placeholder="Search…"
                                className={cx('searchInput')}
                                value={this.state.searchValue}
                                onChange={this.inputChangedHandler}
                            />
                        </form>
                    </div>
                    <div className={cx('menu')} onClick={() => this.props.drawerToggleClicked()}>
                        <MenuIcon />
                    </div>
                    <nav className={cx('navItems', 'desktopOnly')}>
                        <NavigationItems
                            onShowModal={onShowModal}
                            onLogout={onLogout}
                            isAuthenticated={isAuthenticated}
                        />
                    </nav>
    
                </div>
            </header>
        );
    };
};

export default Toolbar;