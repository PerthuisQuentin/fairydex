import classNames from 'classnames';
import { ReactNode } from 'react';

interface IconBarProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export default function IconBar({ children, className }: IconBarProps) {
  return (
    <div
      className={classNames(
        'mt-2 bg-z-gray border-2 border-z-gray-2 rounded',
        'flex flex-row justify-around items-center',
        className
      )}
    >
      {children}
    </div>
  );
}

interface IconBarHighlightProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function IconBarHighlight({ children, className }: IconBarHighlightProps) {
  return (
    <div
      className={classNames(
        'p-1 border-2 border-z-gray-2 rounded flex justify-center scale-125 bg-z-gray',
        className
      )}
    >
      {children}
    </div>
  );
}
