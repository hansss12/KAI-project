export interface User {
  id: string;
  email: string;
  username: string;
  role: string;
}

export interface LoginReqI {
  nipp: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginI {
  success: boolean;
  response_code: number;
  error: Error;
  data: DataLogin;
}

interface Error {
  request_id: string;
  status_name: string;
  path: string;
  method: string;
  timestamp: string;
  message: string;
}

interface DataLogin {
  token: string;
  refreshToken: string;
  expiresIn: ExpiresIn;
  profile: Profile;
}

interface ExpiresIn {
  token: number;
  refreshToken: number;
}

export interface Profile {
  nama: string;
  posisi: string;
  idPosisi: number;
  role: string;
  isWriter: boolean;
  isReader: boolean;
}
