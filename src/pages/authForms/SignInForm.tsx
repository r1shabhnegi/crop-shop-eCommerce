'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInValidation } from '@/utils/validation';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useSignInAccount } from '@/services/tanStack/queriesAndMutations';
import { useAppDispatch } from '@/services/redux/store';
import { Spinner } from '@nextui-org/react';
import { checkAuthUser } from '@/services/redux/authSlice';

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutateAsync: signInAccount } = useSignInAccount();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof signInValidation>>({
    resolver: zodResolver(signInValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof signInValidation>) {
    try {
      setIsLoading(true);
      const signInSession = await signInAccount({
        email: values.email,
        password: values.password,
      });

      if (!signInSession) {
        toast({
          title: 'Something went wrong. Please login your new account',
        });
        navigate('/');
        return;
      }

      const checkAuth = await dispatch(checkAuthUser());
      console.log(checkAuth);

      if (checkAuth) {
        form.reset();
        navigate('/');
        return;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 w-80 bg-[#00000039] text-white p-8 rounded-lg'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  className=' border-none  text-black'
                  type='email'
                  placeholder='email'
                  {...field}
                />
              </FormControl>

              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className=' border-none text-black'
                  placeholder='password'
                  type='password'
                  {...field}
                />
              </FormControl>

              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />
        <Button
          className='bg-gray-700 w-full'
          type='submit'>
          {isLoading ? <Spinner /> : 'Submit'}
        </Button>
        <p className='text-xs text-center'>
          Not registered yet?
          <Link to='/sign-up'>
            <span className='text-green-400 font-bold'> Create account.</span>
          </Link>
        </p>
      </form>
    </Form>
  );
};
export default SignInForm;
