import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b923999331290b1cf754790cb85c4ab5.jpeg?x-expires=1652230800&x-signature=zn%2F9fVM013snGa9h28IOwO2MeIA%3D'
        alt='Hoaa'
      />
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
