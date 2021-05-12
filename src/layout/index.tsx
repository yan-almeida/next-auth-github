import { signIn, signOut, useSession } from 'next-auth/client';
import { PropsWithChildren } from '../../@types/with-children';
import { DirectionalContainer } from '../components/helpers/directionalContainer';

const Layout = ({ children }: PropsWithChildren) => {
  const [session, loading] = useSession();

  if (loading) return <div>Redirecionando...</div>;
  else
    return (
      <div>
        <DirectionalContainer direction="row" justify="space-evenly">
          {!session ? (
            <button onClick={() => signIn(process.env.IdentityServer4_ID)}>
              Entrar
            </button>
          ) : (
            <button onClick={() => signOut()}>Sair</button>
          )}

          <div>
            Usuário logado:
            {session && <span> {session.user?.name}</span>}
          </div>
        </DirectionalContainer>

        <main>{children}</main>
      </div>
    );
};

export default Layout;
