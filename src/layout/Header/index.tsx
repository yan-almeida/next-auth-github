import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client';

const Header = () => {
  const [session] = useSession();

  return (
    <header>
      <nav>
        <Link href="/">
          <a className="logo">Digital Mark</a>
        </Link>

        <p>
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signin();
              }}
            >
              <button className="signInButton">Sign in</button>
            </a>
          )}
          {session && (
            <>
              <Link href="/profile">
                <a>
                  <span
                    style={{ backgroundImage: `url(${session.user?.image})` }}
                    className="avatar"
                  />
                </a>
              </Link>
              <span className="email">{session.user?.email}</span>
              <a
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signout();
                }}
              >
                <button className="signOutButton">Sign out</button>
              </a>
            </>
          )}
        </p>
      </nav>

      <style jsx>{`
        header {
          border-bottom: 1px solid #ccc;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        .logo {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .avatar {
          border-radius: 2rem;
          float: left;
          height: 2.2rem;
          width: 2.2rem;
          background-color: white;
          background-size: cover;
          border: 2px solid #ddd;
        }
        .email {
          margin-right: 1rem;
          margin-left: 0.25rem;
          font-weight: 600;
        }
        .signInButton,
        .signOutButton {
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        .signInButton {
          background-color: #1eb1fc;
        }
        .signInButton:hover {
          background-color: #1b9fe2;
        }
        .signOutButton {
          background-color: #333;
        }
        .signOutButton:hover {
          background-color: #555;
        }
      `}</style>
    </header>
  );
};

export default Header;
