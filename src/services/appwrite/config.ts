import { Account, Avatars, Client, Databases } from 'appwrite';

export const appwriteConfigs = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databasesId: import.meta.env.VITE_APPWRITE_DATABASES_ID,
  userId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  savedId: import.meta.env.VITE_APPWRITE_SAVED_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfigs.endpoint);
client.setProject(appwriteConfigs.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
