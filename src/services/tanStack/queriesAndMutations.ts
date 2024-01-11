import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { createAccount, signInAccount, signOutAccount } from '../appwrite/api';
import { createAccountTYP, signInAccountTYP } from '@/utils/types';

export const useCreateAccount = () => {
  return useMutation({
    mutationFn: (user: createAccountTYP) => createAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (userSignInData: signInAccountTYP) =>
      signInAccount(userSignInData),
  });
};

// export const useSignOutAccount = () => {
//   return useMutation({
//     mutationFn: signOutAccount,
//   });
// };
