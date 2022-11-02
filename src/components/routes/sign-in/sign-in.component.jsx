import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';

import { Fragment } from 'react';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../../utils/firebase/firebase.utils';

import SignUpForm from '../../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <Fragment>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUpForm />
    </Fragment>
  );
};

export default SignIn;