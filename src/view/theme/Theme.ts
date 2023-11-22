import {StyleProp, TextStyle} from 'react-native';

import {
  borderRadius,
  BorderRadiusVariants,
  colors,
  spacing,
  SpacingVariants,
  TextVariant,
  textVariants,
} from './sheet';

export const theme: ThemeProps = {
  typo: textVariants,
  colors,
  spacing,
  borderRadius,
};

export interface ThemeProps {
  typo: Record<TextVariant, StyleProp<TextStyle>>;
  colors: typeof colors;
  spacing: Record<SpacingVariants, number>;
  borderRadius: Record<BorderRadiusVariants, number>;
}
