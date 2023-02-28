import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async values => {
    const responce = await FakeAPI.login(values);
    if (responce.success) {
      navigate('/profile', { replace: true });
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};
