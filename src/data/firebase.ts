// src/data/firebase.ts
import { TimelineData } from './types';

const firebaseData: TimelineData = {
    database: 'firebase',
    displayName: 'Firebase Realtime Database',
    frameworks: [
        // Драйверы - Web
        {
            id: 'firebase-js-sdk',
            name: 'Firebase JavaScript SDK',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2014-04-01',
            description: 'Official Firebase JavaScript SDK',
            authors: ['Google']
        },
        {
            id: 'firebase-admin-node',
            name: 'Firebase Admin SDK for Node.js',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2016-05-18',
            description: 'Server-side Firebase SDK for Node.js with admin privileges',
            authors: ['Google']
        },

        // Драйверы - Mobile
        {
            id: 'firebase-android',
            name: 'Firebase Android SDK',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2014-10-01',
            description: 'Official Firebase SDK for Android',
            authors: ['Google']
        },
        {
            id: 'firebase-ios',
            name: 'Firebase iOS SDK',
            category: 'Driver',
            language: 'Swift',
            releaseDate: '2015-05-01',
            description: 'Official Firebase SDK for iOS',
            authors: ['Google']
        },
        {
            id: 'firebase-flutter',
            name: 'FlutterFire',
            category: 'Driver',
            language: 'Dart',
            releaseDate: '2018-05-01',
            description: 'Firebase plugins for Flutter apps',
            authors: ['Google']
        },

        // Драйверы - Other platforms
        {
            id: 'firebase-python',
            name: 'Firebase Admin SDK for Python',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2017-08-01',
            description: 'Official Firebase Admin SDK for Python',
            authors: ['Google']
        },
        {
            id: 'firebase-dotnet',
            name: 'Firebase Admin SDK for .NET',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2018-10-31',
            description: 'Official Firebase Admin SDK for .NET',
            authors: ['Google']
        },
        {
            id: 'firebase-java',
            name: 'Firebase Admin SDK for Java',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2016-11-01',
            description: 'Official Firebase Admin SDK for Java',
            authors: ['Google']
        },
        {
            id: 'firebase-go',
            name: 'Firebase Admin SDK for Go',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2017-08-01',
            description: 'Official Firebase Admin SDK for Go',
            authors: ['Google']
        },

        // Firestore specific - introduced in 2017
        {
            id: 'firestore-js',
            name: 'Firestore SDK for JavaScript',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2017-10-03',
            description: 'JavaScript SDK for Cloud Firestore',
            authors: ['Google']
        },
        {
            id: 'firestore-android',
            name: 'Firestore SDK for Android',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-10-03',
            description: 'Android SDK for Cloud Firestore',
            authors: ['Google']
        },
        {
            id: 'firestore-ios',
            name: 'Firestore SDK for iOS',
            category: 'Driver',
            language: 'Swift',
            releaseDate: '2017-10-03',
            description: 'iOS SDK for Cloud Firestore',
            authors: ['Google']
        },
        {
            id: 'firestore-flutter',
            name: 'Cloud Firestore for Flutter',
            category: 'Driver',
            language: 'Dart',
            releaseDate: '2018-05-01',
            description: 'Firestore plugin for Flutter',
            authors: ['Google']
        },

        // ORM/ODM frameworks
        {
            id: 'firebase-orm',
            name: 'Firebase ORM',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2017-06-01',
            description: 'ORM for Firebase Realtime Database',
            authors: ['Community']
        },
        {
            id: 'firemodel',
            name: 'Firemodel',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2018-10-01',
            description: 'Firestore modeling framework for Go',
            authors: ['Community']
        },
        {
            id: 'fireo',
            name: 'Fireo ORM',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2019-01-01',
            description: 'ORM for Firestore in Python',
            authors: ['Community']
        },
        {
            id: 'firestorm',
            name: 'FirestoreODM',
            category: 'ORM',
            language: 'Swift',
            releaseDate: '2018-11-01',
            description: 'ODM for Firestore in Swift',
            authors: ['Community']
        },
        {
            id: 'typesaurus',
            name: 'Typesaurus',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2019-03-01',
            description: 'Type-safe ODM for Firestore in TypeScript',
            authors: ['Sasha Koss']
        },

        // Admin tools
        {
            id: 'firebase-console',
            name: 'Firebase Console',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2014-04-01',
            description: 'Web-based management console for Firebase',
            authors: ['Google']
        },
        {
            id: 'firebase-cli',
            name: 'Firebase CLI',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2016-05-18',
            description: 'Command line tools for Firebase',
            authors: ['Google']
        },
        {
            id: 'firebase-local-emulator',
            name: 'Firebase Local Emulator Suite',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2019-05-07',
            description: 'Local development environment for Firebase',
            authors: ['Google']
        },
        {
            id: 'firebase-explorer',
            name: 'Firestore Data Viewer',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2017-10-03',
            description: 'Interactive data viewer for Firestore',
            authors: ['Google']
        },

        // Migration tools
        {
            id: 'firebase-import-export',
            name: 'Firebase Import/Export',
            category: 'Migration',
            language: 'JavaScript',
            releaseDate: '2016-05-18',
            description: 'Tools for importing and exporting Firebase Realtime Database data',
            authors: ['Google']
        },
        {
            id: 'firestore-import-export',
            name: 'Firestore Import/Export',
            category: 'Migration',
            language: 'JavaScript',
            releaseDate: '2018-01-01',
            description: 'Tools for importing and exporting Firestore data',
            authors: ['Google', 'Community']
        },
        {
            id: 'rtdb-to-firestore',
            name: 'RTDB to Firestore',
            category: 'Migration',
            language: 'JavaScript',
            releaseDate: '2018-01-01',
            description: 'Migration tool from Firebase Realtime Database to Cloud Firestore',
            authors: ['Google', 'Community']
        },

        // Server-side features
        {
            id: 'firebase-security-rules',
            name: 'Firebase Security Rules',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2014-04-01',
            description: 'Declarative security model for Firebase',
            authors: ['Google']
        },
        {
            id: 'firestore-security-rules',
            name: 'Firestore Security Rules',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2017-10-03',
            description: 'Security rules specific to Firestore',
            authors: ['Google']
        },
        {
            id: 'cloud-functions-firebase',
            name: 'Cloud Functions for Firebase',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2017-03-09',
            description: 'Serverless function execution triggered by Firebase events',
            authors: ['Google']
        },
        {
            id: 'firebase-extensions',
            name: 'Firebase Extensions',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2019-10-29',
            description: 'Pre-packaged solutions for common app development challenges',
            authors: ['Google']
        },
        {
            id: 'firebase-app-check',
            name: 'Firebase App Check',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2021-06-01',
            description: 'Security feature that helps protect Firebase resources from abuse',
            authors: ['Google']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'firebase-hosting',
            name: 'Firebase Hosting',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2014-05-01',
            description: 'Web hosting for Firebase apps',
            authors: ['Google']
        },
        {
            id: 'angular-fire',
            name: 'AngularFire',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2014-10-01',
            description: 'Official Firebase integration for Angular',
            authors: ['Google', 'Community']
        },
        {
            id: 'react-firebase-hooks',
            name: 'React Firebase Hooks',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2018-11-01',
            description: 'React hooks for Firebase',
            authors: ['Community']
        },
        {
            id: 'vuexfire',
            name: 'VuexFire',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2016-10-01',
            description: 'Firebase binding for Vuex',
            authors: ['Community']
        },
        {
            id: 'redux-firebase',
            name: 'Redux Firebase',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2016-01-01',
            description: 'Redux bindings for Firebase',
            authors: ['Community']
        },
        {
            id: 'firebase-ui-web',
            name: 'FirebaseUI for Web',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2016-05-01',
            description: 'JavaScript library for Firebase Auth UI',
            authors: ['Google']
        },
        {
            id: 'firebase-ui-android',
            name: 'FirebaseUI for Android',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '2016-05-01',
            description: 'UI bindings for Firebase in Android',
            authors: ['Google']
        },
        {
            id: 'firebase-ui-ios',
            name: 'FirebaseUI for iOS',
            category: 'Apps with abstract storage',
            language: 'Swift',
            releaseDate: '2016-05-01',
            description: 'UI bindings for Firebase in iOS',
            authors: ['Google']
        },

        // Логирование
        {
            id: 'firebase-crashlytics',
            name: 'Firebase Crashlytics',
            category: 'Logging',
            language: 'Java',
            releaseDate: '2017-01-18',
            description: 'Crash reporting solution for Firebase apps',
            authors: ['Google', 'Fabric']
        },
        {
            id: 'firebase-performance',
            name: 'Firebase Performance Monitoring',
            category: 'Logging',
            language: 'JavaScript',
            releaseDate: '2017-10-03',
            description: 'Performance monitoring for Firebase apps',
            authors: ['Google']
        },
        {
            id: 'firebase-analytics',
            name: 'Google Analytics for Firebase',
            category: 'Logging',
            language: 'JavaScript',
            releaseDate: '2016-05-18',
            description: 'App analytics for Firebase',
            authors: ['Google']
        },

        // Message Broker
        {
            id: 'firebase-cloud-messaging',
            name: 'Firebase Cloud Messaging',
            category: 'Message broker',
            language: 'JavaScript',
            releaseDate: '2016-05-18',
            description: 'Cross-platform messaging solution',
            authors: ['Google']
        },
        {
            id: 'firestore-realtime-listeners',
            name: 'Firestore Realtime Listeners',
            category: 'Message broker',
            language: 'JavaScript',
            releaseDate: '2017-10-03',
            description: 'Real-time update listeners for Firestore',
            authors: ['Google']
        },
        {
            id: 'rtdb-realtime-listeners',
            name: 'Realtime Database Listeners',
            category: 'Message broker',
            language: 'JavaScript',
            releaseDate: '2014-04-01',
            description: 'Real-time update listeners for Firebase Realtime Database',
            authors: ['Google']
        }
    ],
    dependencies: [
        // Firebase SDK dependencies
        {
            source: 'firebase-js-sdk',
            target: 'firestore-js',
            description: 'Firestore JavaScript SDK is part of the Firebase JS SDK'
        },
        {
            source: 'firebase-android',
            target: 'firestore-android',
            description: 'Firestore Android SDK is part of the Firebase Android SDK'
        },
        {
            source: 'firebase-ios',
            target: 'firestore-ios',
            description: 'Firestore iOS SDK is part of the Firebase iOS SDK'
        },
        {
            source: 'firebase-flutter',
            target: 'firestore-flutter',
            description: 'Firestore Flutter plugin is part of FlutterFire'
        },

        // ORM dependencies
        {
            source: 'firebase-js-sdk',
            target: 'firebase-orm',
            description: 'Firebase ORM uses Firebase JavaScript SDK'
        },
        {
            source: 'firestore-js',
            target: 'typesaurus',
            description: 'Typesaurus uses Firestore JavaScript SDK'
        },
        {
            source: 'firebase-go',
            target: 'firemodel',
            description: 'Firemodel uses Firebase Admin SDK for Go'
        },
        {
            source: 'firebase-python',
            target: 'fireo',
            description: 'Fireo uses Firebase Admin SDK for Python'
        },
        {
            source: 'firestore-ios',
            target: 'firestorm',
            description: 'FirestoreODM uses Firestore iOS SDK'
        },

        // Admin tool dependencies
        {
            source: 'firebase-js-sdk',
            target: 'firebase-console',
            description: 'Firebase Console is built on Firebase JS SDK'
        },
        {
            source: 'firebase-admin-node',
            target: 'firebase-cli',
            description: 'Firebase CLI uses Firebase Admin SDK for Node.js'
        },
        {
            source: 'firebase-js-sdk',
            target: 'firebase-explorer',
            description: 'Firestore Data Viewer uses Firebase JS SDK'
        },
        {
            source: 'firebase-admin-node',
            target: 'firebase-local-emulator',
            description: 'Firebase Local Emulator Suite emulates Firebase services'
        },

        // Migration tool dependencies
        {
            source: 'firebase-admin-node',
            target: 'firebase-import-export',
            description: 'Firebase Import/Export uses Firebase Admin SDK'
        },
        {
            source: 'firebase-admin-node',
            target: 'firestore-import-export',
            description: 'Firestore Import/Export uses Firebase Admin SDK'
        },
        {
            source: 'firebase-admin-node',
            target: 'rtdb-to-firestore',
            description: 'RTDB to Firestore migration tool uses Firebase Admin SDK'
        },

        // Server-side feature dependencies
        {
            source: 'firebase-js-sdk',
            target: 'firebase-security-rules',
            description: 'Security Rules are used by Firebase JS SDK'
        },
        {
            source: 'firestore-js',
            target: 'firestore-security-rules',
            description: 'Firestore Security Rules are used by Firestore JS SDK'
        },
        {
            source: 'firebase-admin-node',
            target: 'cloud-functions-firebase',
            description: 'Cloud Functions can use Firebase Admin SDK'
        },
        {
            source: 'cloud-functions-firebase',
            target: 'firebase-extensions',
            description: 'Firebase Extensions are built on Cloud Functions'
        },
        {
            source: 'firebase-js-sdk',
            target: 'firebase-app-check',
            description: 'Firebase App Check is integrated with Firebase JS SDK'
        },

        // App framework dependencies
        {
            source: 'firebase-js-sdk',
            target: 'angular-fire',
            description: 'AngularFire is built on Firebase JS SDK'
        },
        {
            source: 'firebase-js-sdk',
            target: 'react-firebase-hooks',
            description: 'React Firebase Hooks use Firebase JS SDK'
        },
        {
            source: 'firebase-js-sdk',
            target: 'vuexfire',
            description: 'VuexFire uses Firebase JS SDK'
        },
        {
            source: 'firebase-js-sdk',
            target: 'redux-firebase',
            description: 'Redux Firebase uses Firebase JS SDK'
        },
        {
            source: 'firebase-js-sdk',
            target: 'firebase-ui-web',
            description: 'FirebaseUI for Web uses Firebase JS SDK'
        },
        {
            source: 'firebase-android',
            target: 'firebase-ui-android',
            description: 'FirebaseUI for Android uses Firebase Android SDK'
        },
        {
            source: 'firebase-ios',
            target: 'firebase-ui-ios',
            description: 'FirebaseUI for iOS uses Firebase iOS SDK'
        },
        {
            source: 'firebase-js-sdk',
            target: 'firebase-hosting',
            description: 'Firebase Hosting can serve Firebase JS apps'
        },

        // Logging dependencies
        {
            source: 'firebase-android',
            target: 'firebase-crashlytics',
            description: 'Firebase Crashlytics integrates with Firebase Android SDK'
        },
        {
            source: 'firebase-ios',
            target: 'firebase-crashlytics',
            description: 'Firebase Crashlytics integrates with Firebase iOS SDK'
        },
        {
            source: 'firebase-js-sdk',
            target: 'firebase-performance',
            description: 'Firebase Performance integrates with Firebase JS SDK'
        },
        {
            source: 'firebase-js-sdk',
            target: 'firebase-analytics',
            description: 'Google Analytics integrates with Firebase JS SDK'
        },

        // Message broker dependencies
        {
            source: 'firebase-js-sdk',
            target: 'firebase-cloud-messaging',
            description: 'Firebase Cloud Messaging uses Firebase JS SDK'
        },
        {
            source: 'firestore-js',
            target: 'firestore-realtime-listeners',
            description: 'Realtime listeners are a core feature of Firestore'
        },
        {
            source: 'firebase-js-sdk',
            target: 'rtdb-realtime-listeners',
            description: 'Realtime listeners are a core feature of Firebase Realtime Database'
        },
        {
            source: 'cloud-functions-firebase',
            target: 'firebase-cloud-messaging',
            description: 'Cloud Functions can send messages via FCM'
        }
    ]
};

export default firebaseData;
