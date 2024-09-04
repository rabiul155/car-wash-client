import Button from '@/components/shared/Button/Button';
import InputField from '@/components/shared/InputField/InputField';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function Signup() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <Card className="w-[350px] ">
        <CardHeader className="flex items-center">
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="mt- flex flex-col gap-3">
            <div className="grid w-full items-center gap-4">
              <InputField
                label="Name"
                name="name"
                onChange={() => {}}
                value={'Abul Mia'}
              />
              <InputField
                label="Email"
                name="email"
                onChange={() => {}}
                value={'example@gmail.com'}
                type="email"
              />
              <InputField
                label="Phone"
                name="phone"
                onChange={() => {}}
                value={'0178957835'}
                type="number"
              />
              <InputField
                label="Password"
                name="password"
                onChange={() => {}}
                value={'1234567654'}
                type="password"
              />
              <InputField
                label="Address"
                name="address"
                onChange={() => {}}
                value={'vatara'}
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
