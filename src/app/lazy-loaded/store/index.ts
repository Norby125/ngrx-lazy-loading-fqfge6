import { inc, dec } from './actions';
import { lazyReducer, LazyState } from './reducers';
import { getMyCounter, featureSelector } from './selectors';


const fromLazyStore = { inc, dec, lazyReducer, LazyState, featureSelector, getMyCounter };
export { fromLazyStore };