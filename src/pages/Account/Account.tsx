import { useState } from 'react';
import Button from '@/components/shared/Button/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import TextAreaField from '@/components/shared/TextAreaField/TextAreaField';
import InputField from '@/components/shared/InputField/InputField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'sonner';
import { useUpdateUserMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authServices';

const userValidationSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Name is required').required('Name is required'),
  phone: Yup.string()
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),

  address: Yup.string()
    .min(6, 'Address is too sort')
    .required('Address is required'),
});

function Account() {
  const [edit, setEdit] = useState(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const [updateUser] = useUpdateUserMutation();

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      address: user?.address,
    },
    validationSchema: userValidationSchema,

    onSubmit: async (values) => {
      values.phone = values.phone?.toString();
      try {
        const updatedUser = await updateUser({
          _id: user?._id,
          user: values,
        }).unwrap();
        dispatch(setUser({ user: updatedUser.data, token: updatedUser.token }));
        toast.success('User updated successfully');
        setEdit(false);
      } catch (err: any) {
        toast.error(err.data.message || 'An error occur');
      }
    },
  });

  return (
    <div className="relative">
      {/* page Heder  */}
      <div className="flex justify-between items-center py-4 md:px-4">
        <h2 className="text-xl font-bold text-gray-800">My Profile</h2>
        {!edit && (
          <div className="absolute top-3 right-4">
            <Button onClick={() => setEdit(true)}>Edit Profile</Button>
          </div>
        )}
      </div>
      <hr />
      <div className="md:px-4 py-4 text-gray-800 flex flex-col gap-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 w-full lg:w-[80%]"
        >
          <InputField
            label="Name"
            name="name"
            type="text"
            disabled={!edit}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name ? formik.errors.name : undefined}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            disabled={true}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <InputField
            label="Phone"
            name="phone"
            type="number"
            disabled={!edit}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone ? formik.errors.phone : undefined}
          />

          <TextAreaField
            label="Address"
            name="address"
            disabled={!edit}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address ? formik.errors.address : undefined}
          />
          {edit && (
            <div className="absolute top-3 right-4">
              <Button type="submit">Save Changes</Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Account;
