import { CardContent } from './ui/Card';
import { Progress } from './ui/Progress';
import { Input } from './ui/Input';
import { LabelledInput } from './LabelledInput';
import { DatePicker } from './DatePicker';

export const APEFormPage1 = () => {
  return (
    <CardContent className="text-left">
      <div className="flex items-center gap-4">
        <Progress className="h-3" value={10} />
        <p className="min-w-20 text-right">Page 1 of 3</p>
      </div>
      <div className="space-y-4 mt-4">
        <h2 className="text-xl font-bold">Basic Information</h2>

        {/* Name */}
        <LabelledInput label="Full Name" id="name" isRequired={true}>
          <Input type="text" required={true} placeholder="Given Name" />
          <Input type="text" placeholder="Middle Name" />
          <Input type="text" required={true} placeholder="Last Name" />
        </LabelledInput>

        {/* Date of Birth */}
        <LabelledInput label="Date of Birth" id="dob" isRequired={true}>
          <DatePicker />
        </LabelledInput>

        {/* Address */}
        <LabelledInput label="Address" id="address" isVertical={true} isRequired={true}>
          <Input type="text" required={true} placeholder="Address Line 1" />
          <Input type="text" required={true} placeholder="Address Line 2" />
          <div className="flex gap-2">
            <Input type="text" required={true} placeholder="Barangay" />
            <Input type="text" required={true} placeholder="Municipality/City" />
          </div>
          <div className="flex gap-2">
            <Input type="text" required={true} placeholder="Province" />
            <Input type="number" required={true} placeholder="Zip Code" />
          </div>
        </LabelledInput>

        {/* Email Address */}
        <LabelledInput label="Email" id="email" isRequired={true}>
          <Input type="email" required={true} placeholder="example@example.com" />
        </LabelledInput>

        {/* Phone */}
        <LabelledInput label="Phone" id="phone" isRequired={true}>
          <Input type="tel" required={true} placeholder="09123456789" />
        </LabelledInput>

        {/* Height */}
        <LabelledInput label="Height (cm)" id="height" isRequired={true}>
          <Input type="number" required={true} placeholder="cm" />
        </LabelledInput>

        {/* Weight */}
        <LabelledInput label="Weight (kg)" id="weight" isRequired={true}>
          <Input type="number" required={true} placeholder="kg" />
        </LabelledInput>
      </div>
    </CardContent>
  );
};
