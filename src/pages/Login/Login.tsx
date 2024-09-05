import Button from '@/components/shared/Button/Button';
import InputField from '@/components/shared/InputField/InputField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLogInMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authServices';
import { useAppDispatch } from '@/redux/hooks';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Login() {
  const [logInApi] = useLogInMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const res = await logInApi(values).unwrap();
        if (res.success) {
          dispatch(setUser({ user: res.data, token: res.token }));
          toast(res.message);
          navigate('/');
        }
      } catch (error: any) {
        console.log(error);
        toast(error.data.message || 'An error occurred');
      }
    },
  });
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className=" w-[350px]">
        <CardHeader className="flex items-center">
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-4 flex flex-col gap-4"
          >
            <div className="grid w-full items-center gap-4">
              <InputField
                label="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <footer className="mt-4 flex flex-col gap-2 justify-center">
              <Button type="submit" onClick={() => {}}>
                Log In
              </Button>
              <div className="text-gray-700 text-sm text-center">
                <span>Don't Have Account </span>
                <Link className="font-medium text-blue-900" to="/signup">
                  Sign Up
                </Link>
              </div>
            </footer>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
