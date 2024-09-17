import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextAreaField from '@/components/shared/TextAreaField/TextAreaField';
import { Link } from 'react-router-dom';
import SelectField from '../shared/SelectField/SelectField';
import { useAppSelector } from '@/redux/hooks';
import { useCreateReviewMutation } from '@/redux/features/review/reviewApi';
import { toast } from 'sonner';

const validationSchema = Yup.object().shape({
  rating: Yup.number().min(1, 'Please add rating'),
  message: Yup.string().required('Rating is required'),
});

const rating = [
  {
    label: '1 Star',
    value: '1',
  },
  {
    label: '2 Star',
    value: '2',
  },
  {
    label: '3 Star',
    value: '3',
  },
  {
    label: '4 Star',
    value: '4',
  },
  {
    label: '5 Star',
    value: '5',
  },
];

function AddCustomerReview() {
  const user = useAppSelector((state) => state.auth.user);
  const [createReview] = useCreateReviewMutation();
  const formik = useFormik({
    initialValues: {
      rating: null,
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = { name: '', ...values };
      payload.name = user?.name || '';
      try {
        const result = await createReview(payload);
        if (result) {
          toast('Review created');
          formik.resetForm();
        }
      } catch (err: any) {
        toast(err?.data?.message || 'Something went wrong');
      }
    },
  });

  return (
    <div className="relative bg-slate-100 p-4 lg:p-8">
      <div className={`${!user?._id && 'blur-sm'}`}>
        <h2 className="text-2xl text-center font-bold text-gray-700 p-8">
          Add Customer Feedback Here
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full lg:w-1/3 mx-auto space-y-2"
        >
          <SelectField
            label="Rating count"
            className="w-full"
            items={rating}
            handleValueChange={(val) =>
              formik.setFieldValue('rating', Number(val))
            }
            error={formik.touched.rating ? formik.errors.rating : undefined}
          />

          <TextAreaField
            label="Rate ours"
            name="message"
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.message ? formik.errors.message : undefined}
          />
          <div className="flex justify-center items-center gap-4 p-4">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 transition-colors duration-300 font-semibold"
            >
              Add Review
            </button>
            <Link
              to={'/review'}
              className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 font-semibold"
            >
              View All Reviews
            </Link>
          </div>
        </form>
      </div>
      {/* overly effect */}

      {!user?._id && (
        <div className="absolute inset-0 z-10 bg-gray-800 bg-opacity-20 flex justify-center items-center">
          <Link
            to={'/login'}
            className="px-6 py-3 z-20 text-white bg-green-500 hover:bg-green-600 transition-colors duration-300 font-semibold"
          >
            Login To Add Review
          </Link>
        </div>
      )}
    </div>
  );
}

export default AddCustomerReview;
