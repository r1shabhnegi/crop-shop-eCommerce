import { ID } from 'appwrite';
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
      appwriteConfigs.userID,
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
