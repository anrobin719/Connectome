import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Toolbar.scss';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import SearchIcon from '@material-ui/icons/Search';

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
                        ⎈ connectome
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
    
                    <nav className={cx('navItems')}>
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