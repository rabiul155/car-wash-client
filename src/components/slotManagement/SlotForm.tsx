import Button from '@/components/shared/Button/Button';
import { Card, CardContent } from '@/components/ui/card';
import { useGetServicesQuery } from '@/redux/features/services/servicesApi';
import { useFormik } from 'formik';
import { toast } from 'sonner';
import * as Yup from 'yup';
import CalenderDateField from '../shared/CalenderDateField/CalenderDateField';
import { useState } from 'react';
import { dateHelper } from '@/utils/helper';
import SelectField from '../shared/SelectField/SelectField';
import Loading from '../shared/Loading/Loading';
import { ServiceType } from '@/types/service';
import { useCreateSlotsMutation } from '@/redux/features/slots/slotsApi';

const validationSchema = Yup.object().shape({
  service: Yup.string().required('Service is required'),
  date: Yup.string().required('Date is required'),
  startTime: Yup.string().required('Start time is required'),
  endTime: Yup.string().required('End time is required'),
});

const timeHelper = [
  { label: '09:00', value: '09:00' },
  { label: '10:00', value: '10:00' },
  { label: '11:00', value: '11:00' },
  { label: '12:00', value: '12:00' },
  { label: '13:00', value: '13:00' },
  { label: '14:00', value: '14:00' },
  { label: '15:00', value: '15:00' },
  { label: '16:00', value: '16:00' },
];

function SlotForm() {
  const [date, setDate] = useState<Date>(new Date());

  const { data, isLoading } = useGetServicesQuery({});
  const [createSlot] = useCreateSlotsMutation();

  const formik = useFormik({
    initialValues: {
      service: '',
      date: dateHelper(date),
      startTime: '',
      endTime: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const startTime = Number(values.startTime.substring(0, 2));
      const endTime = Number(values.endTime.substring(0, 2));
      if (startTime >= endTime) {
        toast.error('Invalid time slot');
        return;
      }

      try {
        const result = await createSlot(values);
        if (result) {
          toast.success('Slot created successfully');
        }
      } catch (error: any) {
        toast(error.data.message || 'An error occurred');
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const handleDateChange = (date: Date) => {
    setDate(date);
    formik.setFieldValue('date', dateHelper(date));
  };

  const serviceOptionsHelper = (data: ServiceType[]) => {
    const options = data.map((el) => {
      return {
        label: el.name,
        value: el._id,
      };
    });
    return options;
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full md:w-1/2 my-4">
        <CardContent>
          <form
            onSubmit={formik.handleSubmit}
            className="mt-4 flex flex-col gap-4"
          >
            <div className="grid w-full items-center gap-4">
              <SelectField
                label="Select service"
                placeholder="Select One"
                className="w-full"
                items={serviceOptionsHelper(data.data)}
                handleValueChange={(value) =>
                  formik.setFieldValue('service', value)
                }
                error={
                  formik.touched.service ? formik.errors.service : undefined
                }
              />
              <CalenderDateField
                label="Date"
                date={date}
                setDate={handleDateChange}
                error={formik.touched.date ? formik.errors.date : undefined}
              />
              <SelectField
                label="Select start time"
                placeholder="Select One"
                className="w-full"
                items={timeHelper}
                handleValueChange={(value) =>
                  formik.setFieldValue('startTime', value)
                }
                error={
                  formik.touched.startTime ? formik.errors.startTime : undefined
                }
              />
              <SelectField
                label="Select end time"
                placeholder="Select One"
                className="w-full"
                items={timeHelper}
                handleValueChange={(value) =>
                  formik.setFieldValue('endTime', value)
                }
                error={
                  formik.touched.endTime ? formik.errors.endTime : undefined
                }
              />
            </div>
            <footer className="mt-4 flex flex-col gap-2 justify-center">
              <Button type="submit">Create Slot</Button>
            </footer>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SlotForm;
