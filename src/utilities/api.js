import AsyncStorage from '@react-native-community/async-storage';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const { default: Axios } = require('axios');

const Development="dev";
const Production="prod"

const deploy=Development;


export const BASE_URL = deploy==Production?
'http://159.65.10.213:8080/truck-track-0.0.1-SNAPSHOT'
:
'http://159.65.10.213:8080/truck-track-0.0.1-SNAPSHOT'
;

const BASE_URL_LOGIN = deploy==Production? 
'http://159.65.10.213:8080/truck-track-0.0.1-SNAPSHOT'
:
'http://159.65.10.213:8080/truck-track-0.0.1-SNAPSHOT'
;

export const client_id = 'eco-truck-track-client';
export const client_secret = 'eco-truck-track-secret';

export const IMAGE_PREFIX = 'http://159.65.10.213:8080/truck-track-0.0.1-SNAPSHOT/abc/';


const access_token_header = AsyncStorage.getItem('access_token');

const instance = Axios.create({
  baseURL: BASE_URL,
  headers:{'Content-Type': 'multipart/form-data'}
});

const instance2 = Axios.create({
  baseURL: BASE_URL,
});


const refreshAuthLogic = (failedRequest) =>
  instance
    .post(`${BASE_URL_LOGIN}/oauth/token`, null, {
      params: {
        grant_type: 'refresh_token',
        client_id,
        client_secret,
        refresh_token: AsyncStorage.getItem('refresh_token'),
      },
    })
    .then((tokenRefreshResponse) => {
      failedRequest.response.config.params['access_token'] =
        tokenRefreshResponse.data.access_token;
        AsyncStorage.setItem(
        'access_token',
        tokenRefreshResponse.data.access_token
      );
      AsyncStorage.setItem(
        'refresh_token',
        tokenRefreshResponse.data.refresh_token
      );

      return Promise.resolve();
    })
    .catch(() => {
      // store.dispatch(logout());
      return Promise.reject();
    });

createAuthRefreshInterceptor(instance, refreshAuthLogic);

export const loginAsync = async (data) => {
  const fd = new FormData();
  fd.append('grant_type', 'password');
  fd.append('password', data.password);
  fd.append('username', data.username);
  fd.append('client_id', client_id);
  fd.append('client_secret', client_secret);
  return await instance.post(`${BASE_URL_LOGIN}/oauth/token`, fd);
};

export const getUserByIdAsync = async (id) => {

  const access_token = JSON.parse(await AsyncStorage.getItem("access_token"));
  console.log("access token",access_token);
  
  return await instance.get(`${BASE_URL}/customer/user`,{
    params: { access_token, client_id, client_secret, id },
  });
};


export const getParcelListAsync = async (id) => {

  const access_token = JSON.parse(await AsyncStorage.getItem("access_token"));
  console.log("access token",access_token);
  
  return await instance.get(`${BASE_URL}/customer/parcel-type`,{
    params: { access_token, client_id, client_secret, id },
  });
};