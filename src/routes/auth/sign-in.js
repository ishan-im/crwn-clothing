import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase-util';

import SignUpForm from '../../components/sign-up-form/sign-up-form';

import SignInForm from '../../components/sign-in-form.js/sign-in-form';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div  className='authentication-container'>

      <SignInForm/>
      <SignUpForm />
     
    </div>
  );
};

export default SignIn;