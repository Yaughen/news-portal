import React from 'react';
import styles from './style.module.scss';

const MainLayout: React.FC = ({children}) =>
    (<main className={styles.main}>{children}</main>);

export default MainLayout;