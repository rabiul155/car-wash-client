import { useFormik } from 'formik';
import { toast } from 'sonner';
import InputField from '../shared/InputField/InputField';
import { Button } from '../ui/button';
import SelectField from '../shared/SelectField/SelectField';
import { categoryOptions } from '@/utils/helper';
import TextAreaField from '../shared/TextAreaField/TextAreaField';
import { ServiceType } from '@/types/service';
import {
  useCreateServiceMutation,
  useUpdateServiceMutation,
} from '@/redux/features/services/servicesApi';

type ServiceFormType = {
  showModal: (val: boolean) => void;
  service?: ServiceType;
};

function ServiceForm(props: ServiceFormType) {
  const [createService] = useCreateServiceMutation();
  const [updateService] = useUpdateServiceMutation();
  const formik = useFormik({
    initialValues: {
      name: props.service?.name || '',
      category: props.service?.category || '',
      image: props.service?.image || '',
      description: props.service?.description || '',
      price: props.service?.price || '',
      duration: props.service?.duration || '',
    },

    onSubmit: async (values) => {
      values.price = Number(values.price);
      values.duration = Number(values.duration);

      try {
        if (props.service) {
          await updateService({ id: props.service._id, service: values });
          toast.success('Service updated successfully');
          props.showModal(false);
        } else {
          await createService(values);
          toast.success('Service Created successfully');
          props.showModal(false);
        }
      } catch (err: any) {
        toast.error(err.data?.message || 'Something went wrong');
        props.showModal(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className=" flex flex-col gap-2">
      <InputField
        label="Name"
        name="name"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name ? formik.errors.name : undefined}
      />
      <SelectField
        label="Category"
        items={categoryOptions}
        handleValueChange={(val) => formik.setFieldValue('category', val)}
        error={formik.touched.category ? formik.errors.category : undefined}
      />
      <InputField
        label="Image url"
        name="image"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.image}
        error={formik.touched.image ? formik.errors.image : undefined}
      />
      <InputField
        label="price"
        name="price"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.price}
        error={formik.touched.price ? formik.errors.price : undefined}
      />
      <InputField
        label="Duration"
        name="duration"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.duration}
        error={formik.touched.duration ? formik.errors.duration : undefined}
      />
      <TextAreaField
        label="Description"
        name="description"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.description}
        error={
          formik.touched.description ? formik.errors.description : undefined
        }
      />
      <footer className="mt-4 flex justify-end">
        <Button type="submit">Confirm</Button>
      </footer>
    </form>
  );
}

export default ServiceForm;
