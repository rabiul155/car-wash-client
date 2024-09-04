import Button from '@/components/shared/Button/Button';
import InputField from '@/components/shared/InputField/InputField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className=" w-[350px]">
        <CardHeader className="flex items-center">
          <CardTitle>Log In</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="mt-4 flex flex-col gap-4">
            <div className="grid w-full items-center gap-4">
              <InputField
                label="Email"
                name="email"
                onChange={() => {}}
                value={'example@gmail.com'}
                type="email"
              />
              <InputField
                label="Password"
                name="password"
                onChange={() => {}}
                value={'1234567654'}
                type="password"
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
