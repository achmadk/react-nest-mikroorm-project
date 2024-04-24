import { initializeApp } from 'firebase/app'

import { firebaseOptions } from './config'
import { getAuth } from 'firebase/auth'

export const firebaseApp = initializeApp(firebaseOptions)

export const auth = getAuth(firebaseApp)