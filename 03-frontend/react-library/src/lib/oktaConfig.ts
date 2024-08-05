export const oktaConfig = {
    clientId: '0oair5zmah0tYTOky5d7',
    issuer: 'https://dev-02575878.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}