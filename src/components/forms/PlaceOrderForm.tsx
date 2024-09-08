import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { TextInput } from '@/components/forms/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { nameRegex, phoneRegex } from '@/lib/formRegex';
import { SuccessMessage } from '@/components/forms/SuccessMessage';

const FormSchema = z.object({
  nameAndSurname: z.string().refine((value) => nameRegex.test(value), {
    message:
      'Name and surname must contain at least 2 characters followed by a space and at least another 2 characters',
  }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
    message: 'Invalid phone number',
  }),
});

export const PlaceOrderForm = ({ onClose }: { onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className='mt-4'>
        <SuccessMessage />
        <Button variant='outline' className='mt-12' onClick={onClose}>
          Close
        </Button>
      </div>
    );
  }

  return (
    <>
      <p className='mt-8'>
        Please leave your contact details below. We&apos;ll contact you very
        shortly to finalise your order.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='mt-4 flex flex-col gap-[20px]'
        >
          <TextInput
            label='* Name and surname'
            name='nameAndSurname'
            register={form.register}
            error={form.formState.errors.nameAndSurname?.message}
          />
          <TextInput
            label='* Email'
            name='email'
            register={form.register}
            error={form.formState.errors.email?.message}
          />
          <TextInput
            label='* Phone number'
            name='phoneNumber'
            register={form.register}
            error={form.formState.errors.phoneNumber?.message}
          />
          <Button
            type='submit'
            className='bg-primary-dark mt-3 max-w-[156px] md:mt-7'
          >
            Place order
          </Button>
        </form>
      </Form>
    </>
  );
};
