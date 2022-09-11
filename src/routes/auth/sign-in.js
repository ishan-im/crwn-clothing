import { signInWithGooglePopUp } from "../../utils/firebase/firebase-util";

const SignIm = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();

    console.log(response);
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>

      <form></form>
    </div>
  );
};

export default SignIm;
