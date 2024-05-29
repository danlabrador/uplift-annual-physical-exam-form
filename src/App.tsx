import './App.css';
import { Card, CardContent, CardHeader } from './components/ui/Card';
import { Progress } from './components/ui/Progress';
import { Input } from './components/ui/Input';
import { LabelledInput } from './components/LabelledInput';
import { DatePicker } from './components/DatePicker';

// interface InputGroupProps extends React.PropsWithChildren {
//   title: string;
//   isHorizontal?: boolean;
// }

// const InputGroup = ({ title, isHorizontal, children }: InputGroupProps) => {
//   const orientationClassNames = isHorizontal ? 'flex gap-2' : 'flex-col gap-2';
//   return (
//     <div>
//       <h3 className="font-semibold">{title}</h3>
//       <div className={orientationClassNames}>{children}</div>
//     </div>
//   );
// };

const APEFormPage1 = () => {
  return (
    <CardContent className="text-left">
      <div className="flex items-center gap-4">
        <Progress className="h-3" value={33} />
        <p className="min-w-24">Page 1 of 3</p>
      </div>
      <div className="space-y-2 mt-4">
        <h2 className="text-lg font-bold">Basic Information</h2>

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
          <Input type="text" required={true} placeholder="Municipality/City" />
          <Input type="text" required={true} placeholder="Province" />
          <Input type="number" required={true} placeholder="Zip" />
        </LabelledInput>
      </div>
    </CardContent>
  );
};

const APEForm = () => {
  return (
    <Card className="max-w-[1024px] mx-auto">
      <CardHeader>
        <h1 className="text-3xl font-bold">Annual Physical Exam Form</h1>
      </CardHeader>
      <APEFormPage1 />
    </Card>
  );
};

function App() {
  return (
    <main>
      <APEForm />
    </main>
  );
}

export default App;
