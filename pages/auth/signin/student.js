import SignInLayout from '../../../components/SignInLayout';

export default function StudentSignIn() {
  return (
    <SignInLayout
      heading="Welcome Back Student ✨"
      subtext="Sign in to continue your learning journey"
      googleBtnText="Continue with Google"
      emailBtnText="Sign in with Email"
      role="student"
    />
  );
}
