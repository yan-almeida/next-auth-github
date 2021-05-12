import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [
      Providers.IdentityServer4({
        id: process.env.IdentityServer4_ID,
        name: process.env.IdentityServer4_NAME,
        scope: process.env.IdentityServer4_SCOPE,
        domain: process.env.IdentityServer4_DOMAIN,
        clientId: process.env.IdentityServer4_CLIENT_ID,
        protection: 'pkce',
      }),
    ],
  });
