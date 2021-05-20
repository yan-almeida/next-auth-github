import { signIn, signOut, useSession } from 'next-auth/client';
import { PropsWithChildren } from '../../@types/with-children';
import { DirectionalContainer } from '../components/helpers/directionalContainer';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  const [session, loading] = useSession();
  console.log(session);
  if (loading) return <div>Redirecionando...</div>;

  return (
    <div>
      <Header />

      <DirectionalContainer>
        <main>{children}</main>
      </DirectionalContainer>
    </div>
  );
};

export default Layout;
