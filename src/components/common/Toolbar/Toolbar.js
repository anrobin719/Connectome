import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Toolbar.scss';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import SearchIcon from '@material-ui/icons/Search';

const cx = classNames.bind(styles);

const Toolbar = () => {
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
                    <input
                        placeholder="Search…"
                        className={cx('searchInput')}
                    />
                </div>

                <nav className={cx('navItems')}>
                    <NavigationItems />
                </nav>

            </div>
        </header>
    );
};

export default Toolbar;