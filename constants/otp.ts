import { OTPOptions, Algorithm } from '@/types/otp';

export const DEFAULT_OTP_OPTIONS: OTPOptions = {
  algorithm: 'sha1',
  secret: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  duration: 30,
  digits: 6,
  window: 0,
  issuer: 'XOTP',
  account: 'Foo',
};

export const ALGORITHMS: { value: Algorithm; label: string }[] = [
  { value: 'sha1', label: 'sha-1' },
  { value: 'sha224', label: 'sha-224' },
  { value: 'sha256', label: 'sha-256' },
  { value: 'sha384', label: 'sha-384' },
  { value: 'sha512', label: 'sha-512' },
  { value: 'sha-512/224', label: 'sha-512/224' },
  { value: 'sha-512/256', label: 'sha-512/256' },
  { value: 'sha3-224', label: 'sha3-224' },
  { value: 'sha3-256', label: 'sha3-256' },
  { value: 'sha3-384', label: 'sha3-384' },
  { value: 'sha3-512', label: 'sha3-512' },
];

export const DURATION_LIMITS = {
  min: 10,
  max: 240,
} as const;

export const DIGITS_LIMITS = {
  min: 1,
  max: 10,
} as const;