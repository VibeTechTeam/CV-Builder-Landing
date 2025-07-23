import { forwardRef, HTMLAttributes, ElementType } from 'react';
import { cn, fluidText } from '@/lib/utils';

const typographyVariants = {
  h1: {
    fontSize: fluidText(48, 80),
    lineHeight: '1.1',
    fontWeight: '700',
    letterSpacing: '-0.025em',
  },
  h2: {
    fontSize: fluidText(32, 48),
    lineHeight: '1.2',
    fontWeight: '600',
    letterSpacing: '-0.02em',
  },
  h3: {
    fontSize: fluidText(24, 32),
    lineHeight: '1.3',
    fontWeight: '600',
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: fluidText(20, 28),
    lineHeight: '1.4',
    fontWeight: '600',
    letterSpacing: '-0.01em',
  },
  h5: {
    fontSize: fluidText(18, 24),
    lineHeight: '1.4',
    fontWeight: '600',
    letterSpacing: '0',
  },

  'body-xl': {
    fontSize: fluidText(20, 28),
    lineHeight: '1.6',
    fontWeight: '300',
    letterSpacing: '0',
  },
  'body-lg': {
    fontSize: fluidText(18, 24),
    lineHeight: '1.6',
    fontWeight: '400',
    letterSpacing: '0',
  },
  'body-md': {
    fontSize: fluidText(16, 20),
    lineHeight: '1.6',
    fontWeight: '400',
    letterSpacing: '0',
  },
  'body-sm': {
    fontSize: fluidText(14, 16),
    lineHeight: '1.5',
    fontWeight: '400',
    letterSpacing: '0',
  },

  'button-lg': {
    fontSize: fluidText(18, 20),
    lineHeight: '1.2',
    fontWeight: '500',
    letterSpacing: '0',
  },
  'button-md': {
    fontSize: fluidText(16, 18),
    lineHeight: '1.2',
    fontWeight: '500',
    letterSpacing: '0',
  },

  number: {
    fontSize: fluidText(24, 32),
    lineHeight: '1.2',
    fontWeight: '500',
    letterSpacing: '-0.01em',
  },
};

export type TypographyVariant = keyof typeof typographyVariants;

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    { variant = 'body-md', as: Component = 'p', className, children, ...props },
    ref
  ) => {
    const fluidStyles = typographyVariants[variant]
      ? {
          fontSize: typographyVariants[variant].fontSize,
          lineHeight: typographyVariants[variant].lineHeight,
          fontWeight: typographyVariants[variant].fontWeight,
          letterSpacing: typographyVariants[variant].letterSpacing,
        }
      : {};

    return (
      <Component
        ref={ref}
        className={cn('font-inter', className)}
        style={fluidStyles}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
