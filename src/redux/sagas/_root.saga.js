import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import cardSaga from './card.saga';
import collectionSaga from './my_collection.saga';
import savedSaga from './saved_card.saga';
import archivedSaga from './archived.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    archivedSaga(),
    savedSaga(),
    collectionSaga(),
    cardSaga(),
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
  ]);
}
