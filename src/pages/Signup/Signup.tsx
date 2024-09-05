import Button from '@/components/shared/Button/Button';
import InputField from '@/components/shared/InputField/InputField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      address: '',
      role: 'user',
    },
    onSubmit: (values) => {
      console.log(values);
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
            className="mt- flex flex-col gap-3"
          >
            <div className="grid w-full items-center gap-4">
              <InputField
                label="Name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <InputField
                label="Phone"
                name="phone"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <InputField
                label="Address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.address}
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
