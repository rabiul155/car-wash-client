import Button from '@/components/shared/Button/Button';
import InputField from '@/components/shared/InputField/InputField';
import TextAreaField from '@/components/shared/TextAreaField/TextAreaField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSignUpMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authServices';
import { useAppDispatch } from '@/redux/hooks';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import * as Yup from 'yup';

const userValidationSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Name is required').required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  address: Yup.string()
    .min(1, 'Address is required')
    .required('Address is required'),
  role: Yup.mixed()
    .oneOf(['user', 'admin'], 'Invalid role')
    .required('Role is required'),
});

function Signup() {
  const [signUpApi] = useSignUpMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      address: '',
      role: 'user',
    },
    validationSchema: userValidationSchema,
    onSubmit: async (values) => {
      values.phone = values.phone.toString();
      try {
        const res = await signUpApi(values).unwrap();
        if (res.success) {
          dispatch(setUser({ user: res.data, token: res.token }));
          toast(res.message);
          navigate('/');
        }
      } catch (err: any) {
        toast(err.data.message || 'An error occur');
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-[350px] ">
        <CardHeader className="flex items-center">
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={formik.handleSubmit}
            className="mt- flex flex-col gap-4"
          >
            <div className="grid w-full items-center gap-2">
              <InputField
                label="Name"
                name="name"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name ? formik.errors.name : undefined}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email ? formik.errors.email : undefined}
              />
              <InputField
                label="Phone"
                name="phone"
                type="number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.touched.phone ? formik.errors.phone : undefined}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                error={
                  formik.touched.password ? formik.errors.password : undefined
                }
              />
              <TextAreaField
                label="Address"
                name="address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address}
                error={
                  formik.touched.address ? formik.errors.address : undefined
                }
              />
            </div>
            <footer className="mt-1 flex justify-center">
              <Button type="submit" onClick={() => {}}>
                Sign Up
              </Button>
            </footer>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;
