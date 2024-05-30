import { CardContent } from './ui/Card';
import { Label } from './ui/Label';
import { LabelledInput } from './LabelledInput';
import { Progress } from './ui/Progress';
import { RadioGroup, RadioGroupItem } from './ui/RadioGroup';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';
import { Textarea } from './ui/Textarea';
import { useState } from 'react';

export const APEFormPage2 = () => {
  const [isDrinking, setIsDrinking] = useState(false);
  const [isSmoking, setIsSmoking] = useState(false);

  return (
    <CardContent className="text-left">
      <div className="flex items-center gap-4">
        <Progress className="h-3" value={43} />
        <p className="min-w-20 text-right">Page 2 of 3</p>
      </div>
      <div className="space-y-4 mt-4">
        <h2 className="text-xl font-bold">Medical History</h2>

        {/* Alcohol */}
        <LabelledInput label="Do you drink alcohol?" id="alcohol" isRequired={true}>
          <RadioGroup
            onValueChange={selectedValue => setIsDrinking(selectedValue === 'alcohol-yes')}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="alcohol-yes" id="alcohol-yes" />
              <Label htmlFor="alcohol-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="alcohol-no" id="alcohol-no" />
              <Label htmlFor="alcohol-no">No</Label>
            </div>
          </RadioGroup>
        </LabelledInput>

        {/* Frequency if isDrinking */}
        {isDrinking && (
          <LabelledInput label="How often do you drink alcohol?" id="alcohol-frequency">
            <Textarea placeholder="Describe the frequency." />
          </LabelledInput>
        )}

        {/* Smoking */}
        <LabelledInput label="Do you smoke?" id="smoke" isRequired={true}>
          <RadioGroup onValueChange={selectedValue => setIsSmoking(selectedValue === 'smoke-yes')}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="smoke-yes" id="smoke-yes" />
              <Label htmlFor="smoke-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="smoke-no" id="smoke-no" />
              <Label htmlFor="smoke-no">No</Label>
            </div>
          </RadioGroup>
        </LabelledInput>

        {/* Frequency if isSmoking */}
        {isSmoking && (
          <LabelledInput label="How often do you smoke?" id="smoke-frequency">
            <Textarea placeholder="Describe the frequency." />
          </LabelledInput>
        )}

        {/* Blood Type */}
        <LabelledInput label="Blood Type" id="blood-type">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a blood type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aplus">A+</SelectItem>
              <SelectItem value="aminus">A-</SelectItem>
              <SelectItem value="bplus">B+</SelectItem>
              <SelectItem value="bminus">B-</SelectItem>
              <SelectItem value="abplus">AB+</SelectItem>
              <SelectItem value="abminus">AB-</SelectItem>
              <SelectItem value="oplus">O+</SelectItem>
              <SelectItem value="ominus">O-</SelectItem>
            </SelectContent>
          </Select>
        </LabelledInput>

        {/* Other previous conditions */}
        <LabelledInput label="Other previous conditions" id="other-conditions">
          <Textarea placeholder="List other previous conditions." />
        </LabelledInput>
      </div>
    </CardContent>
  );
};
