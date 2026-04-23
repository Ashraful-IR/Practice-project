import { postData } from "./data";
import { revalidatePath } from "next/cache";

export const contactFormAction = async (formData) => {
  // Implementation for handling contact form submission
  'use server';
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const company = formData.get('company');
  const message = formData.get('message');
  
  const newUser =  object.fromEntries(formData.entries());
  console.log('data:', newUser);
  const result = await postData(newUser);
  if (result.ok) {
    revalidatePath('/users'); // Revalidate the users page to reflect the new user count
  }
  return result;
};