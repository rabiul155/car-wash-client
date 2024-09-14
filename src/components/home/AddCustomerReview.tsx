import * as Yup from 'yup';
import { useFormik } from 'formik';
import TextAreaField from '@/components/shared/TextAreaField/TextAreaField';
import { Link } from 'react-router-dom';
import SelectField from '../shared/SelectField/SelectField';

const validationSchema = Yup.object().shape({
  rating: Yup.number().min(1, 'Please add rating'),
  message: Yup.string().required('Rating is required'),
});

const rating = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
];

function AddCustomerReview() {
  const formik = useFormik({
    initialValues: {
      rating: null,
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="relative bg-slate-100 p-4 lg:p-8 ">
      <h2 className="text-2xl text-center font-bold text-gray-800 p-8">
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

      {/* overly effect */}
      <div></div>
    </div>
  );
}

export default AddCustomerReview;
