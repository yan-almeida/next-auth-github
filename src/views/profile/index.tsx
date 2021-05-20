import { useSession } from 'next-auth/client';
import Layout from '../../layout';

const Profile = () => {
  const [session, loading] = useSession();

  return (
    <Layout>
      {session && (
        <>
          <img src={session.user?.image ?? ''} className="avatar" />
          <h1>{session.user?.name}</h1>
        </>
      )}

      <style jsx>{`
        .avatar {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Profile;
