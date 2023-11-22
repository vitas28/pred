import React, { FC, ReactNode } from 'react';
import { Text as BaseText, TextProps, TextStyle } from 'react-native';

import { theme } from '@/view/theme';
import { ColorVariants, TextVariant } from '@/view/theme/sheet';

interface TypographyProps extends TextProps {
  children: ReactNode;
  color?: ColorVariants;
  variant?: TextVariant;
  fontWeight?: TextStyle['fontWeight'];
  lineHeight?: number;
  textAlign?: TextStyle['textAlign'];
}

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'p1',
  color = 'black',
  fontWeight,
  style,
  lineHeight,
  textAlign,
  ...props
}) => {
  const preDefinedStyles = {
    ...(theme.typo[variant] as object),
    ...{ color: theme.colors[color] },
    ...(fontWeight ? { fontWeight } : {}),
    ...(lineHeight ? { lineHeight } : {}),
    ...(textAlign ? { textAlign } : {}),
  };

  return (
    <BaseText style={[preDefinedStyles, style]} {...props}>
      {children}
    </BaseText>
  );
};
