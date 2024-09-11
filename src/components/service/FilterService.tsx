import { Input } from '../ui/input';
import SelectField from '../shared/SelectField/SelectField';

const category = [
  {
    label: 'Washing Service',
    value: 'Washing Service',
  },
  {
    label: 'Repairing Service',
    value: 'Repairing Service',
  },
  {
    label: 'Maintenance Service',
    value: 'Maintenance Service',
  },
  {
    label: 'Master Service',
    value: 'Master Service',
  },
];

const sortBy = [
  {
    label: 'Price, low to high',
    value: 'price',
  },
  {
    label: 'Price, high to low',
    value: '-price',
  },
];

type FilteringProps = {
  handleSearchParams: (field: string, value: string) => void;
};

function FilterService(props: FilteringProps) {
  return (
    <div className="bg-slate-100">
      <div className="w-[90%] flex flex-col lg:flex-row gap-4 justify-between mx-auto py-3">
        <div>
          <SelectField
            label="Category"
            items={category}
            placeholder="Category"
            handleValueChange={(val) =>
              props.handleSearchParams('category', val)
            }
          />
        </div>
        <div>
          <Input
            className="w-64 h-8 border-0 outline-none ring-0 focus:ring-0 focus:outline-none"
            type="text"
            placeholder="Search..."
            onChange={(e) => props.handleSearchParams('search', e.target.value)}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <SelectField
            label="Sort service"
            items={sortBy}
            placeholder="Select a type"
            handleValueChange={(val) => props.handleSearchParams('sort', val)}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterService;
