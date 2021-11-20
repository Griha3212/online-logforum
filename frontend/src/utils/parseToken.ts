type JsonPayload = {

  activeChannel: number;
  adminOfTheChannelNumber: number;
  company: string;
  exp: number;
  firstName: string;
  hasAccessToStatisticPage: boolean;
  iat: number;
  id: number;
  isAdmin: boolean;
  jwtRefreshToken: string;
  jwtRefreshTokenValidUntilDate: Date;
  jwtToken: string | null;
  jwtTokenValidUntilDate: Date | null;
  lastName: string;
  showOtherChannelsBlock: boolean;
};

export const parseToken = (token: string): JsonPayload => {
  if (!token) {
    throw new Error('No token');
  }

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = JSON.parse(decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join('')));
  return jsonPayload;
};

export default parseToken;
