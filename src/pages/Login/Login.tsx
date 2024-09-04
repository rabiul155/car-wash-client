import Button from '@/components/shared/Button/Button';
import InputField from '@/components/shared/InputField/InputField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Login() {
  return (
    <div className="flex justify-center items-center mt-16">
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
            <footer className="mt-6 flex justify-center">
              <Button type="submit" onClick={() => {}}>
                Log In
              </Button>
            </footer>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
