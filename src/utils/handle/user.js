function handleUser(data) {
  return {
    uid: data.uid,
    displayName: data.displayName,
    email: data.email,
    photoUrl: data.photoURL,
    providerId: data?.providerData[0]?.providerId,
  };
}

export default handleUser;
