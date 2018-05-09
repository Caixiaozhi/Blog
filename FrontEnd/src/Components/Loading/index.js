import React from 'react';
import styles from './styles';

export default function Loading({
  progress,
  text,
}) {
    return (
      <div className={styles.container}>
        <div className={styles.progress}>
          {progress ? `${progress}%` : <span>{text}</span>}
        </div>
        <div className={styles.ring} />
      </div>
    )
  }

Loading.default = {
  progress: null,
  text: '加载中'
}
