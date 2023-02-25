import toast from 'react-hot-toast'

const messages = {
   'auth/app-deleted': 'The Firebase app has been deleted.',
   'auth/expired-action-code': 'The action code has expired. Please try again.',
   'auth/invalid-action-code': 'The action code is invalid. Please try again.',
   'auth/user-disabled':
      'The user account has been disabled by an administrator.',
   'auth/user-not-found':
      'The user corresponding to the provided email address or uid does not exist.',
   'auth/weak-password':
      'The provided password is too weak. Please use a stronger password.',
   'auth/email-already-in-use':
      'The email address is already in use by another account.',
   'auth/invalid-email': 'The email address is not valid.',
   'auth/wrong-password':
      'The provided password is incorrect. Please try again.',
   'auth/account-exists-with-different-credential':
      'An account already exists with the same email address but different sign-in credentials. Please sign in using a different provider.',
   'auth/credential-already-in-use':
      'The credential used to authenticate this account is already associated with a different account.',
   'auth/operation-not-allowed':
      'The operation is not allowed for this account.',
   'auth/invalid-credential': 'The credential is malformed or has expired.',
   'auth/network-request-failed':
      'A network error has occurred. Please try again later.',
   'auth/requires-recent-login':
      'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
   'auth/too-many-requests':
      'Too many requests have been made to the Firebase Authentication API for the same action within a short period of time. Please try again later.',
   'auth/unauthorized-domain':
      'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
   'auth/user-mismatch':
      'The supplied credentials do not correspond to the previously signed in user.',
   'auth/provider-already-linked':
      'This account is already linked with a different provider.',
   'auth/no-such-provider':
      'This provider does not exist or has not been enabled for your Firebase project.',
   'auth/token-expired':
      'The Firebase ID token has expired. Please log in again.',
   'auth/invalid-verification-code':
      'The verification code is invalid. Please try again.',
   'auth/missing-verification-code':
      'The verification code is missing. Please try again.',
   'auth/app-not-authorized':
      'This app is not authorized to use Firebase Authentication with the provided API key.',
   'auth/invalid-continue-uri':
      'The continue URL provided in the request is invalid.',
   'auth/invalid-dynamic-link-domain':
      'The provided dynamic link domain is not configured or authorized for the current project.',
   'auth/argument-error':
      'An invalid argument was provided to an Authentication method.',
   'auth/internal-error':
      'An internal error has occurred. Please try again later.',
   'storage/unknown': 'An unknown error occurred.',
   'storage/object-not-found': 'No object exists at the desired reference.',
   'storage/bucket-not-found': 'No bucket is configured for Firebase Storage.',
   'storage/project-not-found':
      'No project is configured for Firebase Storage.',
   'storage/quota-exceeded':
      'Quota on your Firebase Storage bucket has been exceeded.',
   'storage/unauthenticated':
      'User is not authenticated. Please authenticate and try again.',
   'storage/unauthorized':
      'User is not authorized to perform the desired action.',
   'storage/retry-limit-exceeded':
      'The maximum time limit on an operation (upload, download, delete, etc.) has been exceeded. Try uploading again.',
   'storage/canceled': 'The upload was cancelled.',
   'storage/invalid-checksum':
      'File on the client does not match the checksum of the file received by the server. Please try uploading again.',
   'storage/invalid-event-name':
      'Invalid event name provided. Please check the event name and try again.',
   'storage/invalid-url': 'Invalid URL provided to refFromURL().',
   'storage/invalid-argument':
      'Invalid argument provided. Please check the function documentation and try again.',
   'storage/no-default-bucket':
      'No default bucket has been set. Please set a default bucket before using the Firebase Storage SDK.',
   'storage/cannot-slice-blob':
      'Cannot slice blob for upload. Please try uploading again.',
   'storage/server-file-wrong-size':
      'The file on the server does not match the expected size. Please try uploading again.',
   'storage/invalid-argument-count':
      'Invalid number of arguments provided. Please check the function signature and try again.',
   'storage/cannot-download':
      'Cannot download file. Please check your connection and try again.',
   'storage/cannot-observe':
      'Cannot observe the provided path. Please check the path and try again.',
   'storage/server-file-not-found':
      'The file on the server does not exist. Please try downloading again.',
   'storage/unable-to-unarchive':
      'Unable to unarchive the file. Please try downloading again.',
   'storage/cannot-delete':
      'Cannot delete object. Please check your permissions and try again.',
   'storage/unable-to-delete': 'Unable to delete object. Please try again.',
}

function errorMessages(code) {
   toast.error(messages[code], {
      position: 'top-right',
   })
}

export default errorMessages
