import React, { useState, useEffect } from 'react';
import { auth } from './firebase';

function VerifyEmail() {
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const actionCode = urlParams.get('oobCode');
    if (mode === 'verifyEmail' && actionCode) {
      auth.applyActionCode(actionCode)
        .then(() => setStatus('Your email address has been verified.'))
        .catch(() => setStatus('Sorry, there was an error verifying your email address.'));
    } else {
      setStatus('Sorry, there was an error verifying your email address.');
    }
  }, []);

  return <p>{status}</p>;
}

export default VerifyEmail;
