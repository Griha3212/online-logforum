type Token = {
  token: {
    accessToken: string | null;
    refreshToken: string | null;
  }
};

const getLocalStorageData = (): Token => {
  const accessToken = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  return {
    token: { accessToken, refreshToken },
  };
};

export default getLocalStorageData;
