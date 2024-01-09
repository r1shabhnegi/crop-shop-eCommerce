import { ID, Query } from 'appwrite';
import { account, appwriteConfigs, avatars, databases } from './config';
import {
  createAccountTYP,
  saveUserToDbTYP,
  signInAccountTYP,
} from '@/utils/types';

export const createAccount = async (user: createAccountTYP) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw new Error();

    const avatarUrl = avatars.getInitials(user.name);

    const userData = await saveUserToDb({
      accountId: newAccount.$id,
      name: newAccount.name,
      username: user.username,
      email: newAccount.email,
      imageUrl: avatarUrl,
    });

    return userData;
  } catch (error) {
    console.log(error);
  }
};

const saveUserToDb = async (user: saveUserToDbTYP) => {
  try {
    const promise = await databases.createDocument(
      appwriteConfigs.databasesId,
      appwriteConfigs.userId,
      ID.unique(),
      user
    );

    return promise;
  } catch (error) {
    console.log(error);
  }
};

export const signInAccount = async (userSignInData: signInAccountTYP) => {
  try {
    const promise = await account.createEmailSession(
      userSignInData.email,
      userSignInData.password
    );
    return promise;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentAccount = async () => {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw new Error();

    const currentUser = await databases.listDocuments(
      appwriteConfigs.databasesId,
      appwriteConfigs.userId,
      [Query.equal('accountId', currentAccount.$id)]
    );
    if (!currentUser) throw new Error();

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
  }
};

export const getAccount = async () => {
  try {
    const getAccount = await account.get();
    return getAccount;
  } catch (error) {
    console.log(error);
  }
};
