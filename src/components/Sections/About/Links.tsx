import { Icon } from '@material-ui/core';
import react from 'react';

function Links() {
  const iconStyle = 'default';
  return (
    <>
      <a
        href='https://www.linkedin.com/in/seok-jun-hong-a447bb141/'
        target='_blank'
      >
        <Icon
          className='fab fa-linkedin'
          color='primary'
          fontSize={iconStyle}
        />
      </a>
      <a href='https://github.com/sjunhong' target='_blank'>
        <Icon
          className='fab fa-github'
          style={{ color: 'black' }}
          fontSize={iconStyle}
        />
      </a>
      <a href='https://medium.com/seokjunhong' target='_blank'>
        <Icon
          className='fab fa-medium-m'
          style={{ color: 'black' }}
          fontSize={iconStyle}
        />
      </a>
      <a
        href='https://mail.google.com/mail/?view=cm&fs=1&to=seokjunhong_2023@depauw.edu'
        target='_blank'
      >
        <Icon
          className='fas fa-envelope square'
          style={{ color: 'black' }}
          fontSize={iconStyle}
        />
      </a>
    </>
  );
}

export default Links;
