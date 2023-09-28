// src/react-rating.d.ts

declare module 'react-rating' {
  import * as React from 'react';

  interface RatingProps {
    start?: number;
    stop?: number;
    initialRating?: number;
    emptySymbol?: React.ReactNode;
    fullSymbol?: React.ReactNode;
    placeholderSymbol?: React.ReactNode;
    readonly?: boolean;
    fractions?: number;
    direction?: string;
    onClick?(rating: number, event: React.MouseEvent<HTMLElement>): void;
    onChange?(rating: number): void;
    onHover?(rating: number): void;
    onHoverOut?(): void;
    stopSymbolHovered?: React.ReactNode;
    step?: number;
    quiet?: boolean;
    placeholderRating?: number;
  }

  export default class Rating extends React.Component<RatingProps> {}
}
