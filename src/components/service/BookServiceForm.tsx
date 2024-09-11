import { useFormik } from 'formik';
import InputField from '../shared/InputField/InputField';
import * as Yup from 'yup';
import SelectField from '../shared/SelectField/SelectField';
import { Button } from '../ui/button';

type PropsType = {
  serviceId: string;
  slotId: string;
  modalClose: (val: boolean) => void;
};

const validationSchema = Yup.object().shape({
  vehicleType: Yup.string().required('Vehicle type is required'),
  vehicleBrand: Yup.string().required('Vehicle brand is required'),
  vehicleModel: Yup.string().required('Vehicle model is required'),
  manufacturingYear: Yup.number()
    .min(1886, 'Manufacturing year cannot be before 1886') // first car invented
    .max(new Date().getFullYear(), 'Manufacturing year cannot be in the future')
    .required('Manufacturing year is required'),

  registrationPlate: Yup.string().required('Plate number is required'),
});

const vehicleOption = [
  {
    label: 'Car',
    value: 'car',
  },
  {
    label: 'Truck',
    value: 'truck',
  },
  {
    label: 'SUV',
    value: 'SUV',
  },
  {
    label: 'Van',
    value: 'van',
  },
  {
    label: 'Motorcycle',
    value: 'motorcycle',
  },
  {
    label: 'Bus',
    value: 'bus',
  },
  {
    label: 'Electric Vehicle',
    value: 'electricVehicle',
  },
  {
    label: 'Hybrid Vehicle',
    value: 'hybridVehicle',
  },
  {
    label: 'Bicycle',
    value: 'bicycle',
  },
];

function BookServiceForm(props: PropsType) {
  const formik = useFormik({
    initialValues: {
      serviceId: props.serviceId,
      slotId: props.slotId,
      vehicleType: '',
      vehicleBrand: '',
      vehicleModel: '',
      manufacturingYear: undefined,
      registrationPlate: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      props.modalClose(true);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className=" flex flex-col p-2 gap-4">
      <div className="grid w-full items-center gap-4">
        <SelectField
          label="Vehicle Type"
          items={vehicleOption}
          className="w-full"
          handleValueChange={(val) => {
            formik.setFieldValue('vehicleType', val);
          }}
          error={
            formik.touched.vehicleType ? formik.errors.vehicleType : undefined
          }
        />
        <InputField
          label="Vehicle Brand"
          name="vehicleBrand"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.vehicleBrand}
          error={
            formik.touched.vehicleBrand ? formik.errors.vehicleBrand : undefined
          }
        />
        <InputField
          label="Vehicle model number"
          name="vehicleModel"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.vehicleModel}
          error={
            formik.touched.vehicleModel ? formik.errors.vehicleModel : undefined
          }
        />
        <InputField
          label="Manufacturing year"
          name="manufacturingYear"
          type="number"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.manufacturingYear}
          error={
            formik.touched.manufacturingYear
              ? formik.errors.manufacturingYear
              : undefined
          }
        />
        <InputField
          label="Registration plate number"
          name="registrationPlate"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.registrationPlate}
          error={
            formik.touched.registrationPlate
              ? formik.errors.registrationPlate
              : undefined
          }
        />
      </div>
      <footer className="mt-4 flex justify-end">
        <Button type="submit">Confirm Booking</Button>
      </footer>
    </form>
  );
}

export default BookServiceForm;
