export interface OTPOptions {
  algorithm: string;
  secret: string;
  duration: number;
  digits: number;
  window: number;
  issuer: string;
  account: string;
}

export interface OTPResult {
  token: string;
  keyUri: string;
  remaining: number;
  generatedAt: number;
}

export type Algorithm = 
  | 'sha1' 
  | 'sha224' 
  | 'sha256' 
  | 'sha384' 
  | 'sha512' 
  | 'sha-512/224' 
  | 'sha-512/256' 
  | 'sha3-224' 
  | 'sha3-256' 
  | 'sha3-384' 
  | 'sha3-512';