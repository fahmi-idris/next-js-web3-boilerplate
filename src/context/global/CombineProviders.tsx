import * as React from 'react';

const combineProviders = (...providers: React.FC[]): React.FC => {
  return providers.reduce(
    (AccumulatedProviders, Providers) =>
      ({ children }: React.ComponentProps<React.FC>): JSX.Element =>
        (
          <AccumulatedProviders>
            <Providers>{children}</Providers>
          </AccumulatedProviders>
        ),
    ({ children }) => <>{children}</>,
  );
};

export default combineProviders;
