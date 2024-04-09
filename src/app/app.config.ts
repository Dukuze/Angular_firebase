import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"getajob-8186d","appId":"1:350662438516:web:a5419bbfae70b2a099eb21","storageBucket":"getajob-8186d.appspot.com","apiKey":"AIzaSyCdgVyhVjBc_Mz79fklixOxFWzP44H53JA","authDomain":"getajob-8186d.firebaseapp.com","messagingSenderId":"350662438516","measurementId":"G-FFQBZ3KM1F"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"getajob-8186d","appId":"1:350662438516:web:a5419bbfae70b2a099eb21","storageBucket":"getajob-8186d.appspot.com","apiKey":"AIzaSyCdgVyhVjBc_Mz79fklixOxFWzP44H53JA","authDomain":"getajob-8186d.firebaseapp.com","messagingSenderId":"350662438516","measurementId":"G-FFQBZ3KM1F"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"getajob-8186d","appId":"1:350662438516:web:a5419bbfae70b2a099eb21","storageBucket":"getajob-8186d.appspot.com","apiKey":"AIzaSyCdgVyhVjBc_Mz79fklixOxFWzP44H53JA","authDomain":"getajob-8186d.firebaseapp.com","messagingSenderId":"350662438516","measurementId":"G-FFQBZ3KM1F"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
