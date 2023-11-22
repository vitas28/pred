import {StyleProp, TextStyle} from 'react-native';

export const textVariants: Record<TextVariant, StyleProp<TextStyle>> = {
  l1: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 42,
    lineHeight: 50,
  },
  l2: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 43,
  },
  l3: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 33,
  },
  h1: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
  },
  h2: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 26,
  },
  h3: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
  },
  h4: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  },
  h5: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
  t1: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
  t2: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14,
  },
  t3: {
    fontFamily: 'Trade',
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 12,
  },
  p1: {
    fontFamily: 'Trade',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
  },
  p2: {
    fontFamily: 'Trade',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  p3: {
    fontFamily: 'Trade',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
  },
  p4: {
    fontFamily: 'Trade',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  },
  p5: {
    fontFamily: 'Trade',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
  },
};

export type TextVariant =
  | 'l1'
  | 'l2'
  | 'l3'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 't1'
  | 't2'
  | 't3'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5';
