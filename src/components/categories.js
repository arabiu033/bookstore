import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categories';
import styles from '../css/categories.module.css';

const Categories = () => {
  const text = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h2>{text}</h2>
      <button type="button" onClick={() => dispatch(status())} className={styles.status}>Check Status</button>
    </div>
  );
};

export default Categories;
