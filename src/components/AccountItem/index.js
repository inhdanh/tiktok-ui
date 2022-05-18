import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

export default function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image className={cx('avatar')} src='dsf' alt='Hoaa' />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen van a</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}
