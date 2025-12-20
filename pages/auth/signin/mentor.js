import SignInLayout from '../../../components/SignInLayout';

export default function MentorSignIn() {
  return (
    <SignInLayout
      heading="Welcome Back Mentor ✨"
      subtext="Sign in to manage your mentoring dashboard"
      googleBtnText="Continue with Google"
      emailBtnText="Sign in with Email"
      role="mentor"
    />
  );
}
