import styles from './index.module.scss';
import { ReactElement } from 'react';

export function Index(): ReactElement {
  return (
    <div className={styles.page}>
      <h1>Treasure Portfolio Tracker</h1>
    </div>
  );
}

export default Index;
