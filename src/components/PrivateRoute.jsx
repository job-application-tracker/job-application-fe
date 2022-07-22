import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

export default function PrivateRoute({ children, ...rest }) {
  const { currentUser, activeStep, loading } = useUserContext();

  if (loading) return <p>Loading</p>;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser.email && activeStep !== 1 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
