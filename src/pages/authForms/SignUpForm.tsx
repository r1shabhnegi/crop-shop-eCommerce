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
import { signUpValidation } from '@/utils/validation';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      username: '',
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof signUpValidation>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-6 w-80 bg-[#00000039] text-white p-8 rounded-lg'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className=' border-none'
                  placeholder='username'
                  {...field}
                />
              </FormControl>

              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />{' '}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className=' border-none'
                  type='email'
                  placeholder='name'
                  {...field}
                />
              </FormControl>

              <FormMessage className='text-xs text-red-500' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  className=' border-none'
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
                  className=' border-none'
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
          Submit
        </Button>
        <p className='text-xs text-center'>
          Already a member?
          <Link to='/sign-in'>
            <span className='text-green-400 font-bold'> Sign in.</span>
          </Link>
        </p>
      </form>
    </Form>
  );
};
export default SignInForm;
