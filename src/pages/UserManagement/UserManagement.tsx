import { HiOutlineDotsVertical } from 'react-icons/hi';

import Loading from '@/components/shared/Loading/Loading';
import {
  useGetUserQuery,
  useUpdateRoleMutation,
} from '@/redux/features/auth/authApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { UserType } from '@/redux/features/auth/authServices';
import { toast } from 'sonner';
import { useAppSelector } from '@/redux/hooks';

function UserManagement() {
  const user = useAppSelector((state) => state.auth.user);
  const { data, isLoading } = useGetUserQuery(null);
  const [updateRole] = useUpdateRoleMutation();
  if (isLoading) {
    return <Loading />;
  }

  const filteredUser = data.data.filter((el: UserType) => el._id !== user?._id);

  const handleUpdateRole = async (data: {
    _id: string;
    role: 'admin' | 'user';
  }) => {
    try {
      await updateRole(data);
      toast.success('Role updated');
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredUser.map((user: UserType, index: number) => (
          <TableRow key={user._id}>
            <TableCell className="w-[100px]">{index + 1}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>

            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span className="px-2 py-1 flex justify-center bg-slate-100 rounded w-14 cursor-pointer">
                    {user.role}
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-24">
                  <DropdownMenuItem
                    onClick={() =>
                      handleUpdateRole({ _id: user._id, role: 'admin' })
                    }
                  >
                    admin
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      handleUpdateRole({ _id: user._id, role: 'user' })
                    }
                  >
                    user
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default UserManagement;
