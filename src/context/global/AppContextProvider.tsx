import * as React from 'react';

import combineProviders from './CombineProviders';

const providers = [];

const AppContextProvider: React.FC = combineProviders(...providers);

export default AppContextProvider;
