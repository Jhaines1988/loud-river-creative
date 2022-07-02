import React from 'react';
import * as styles from './container.module.css';
const Container = ({ tag = 'div', ...props }) => {
  const Tag = tag;
  const children = props.children;
  return (
    <Tag className={props.className ? props.className : styles.layout}>
      {children}
    </Tag>
  );
};

export default Container;
