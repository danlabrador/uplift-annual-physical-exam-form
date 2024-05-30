import { useState } from 'react';
import { CardContent } from './ui/Card';
import { Progress } from './ui/Progress';
import { LabelledInput } from './LabelledInput';
import { Input } from './ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';
import { Button } from './ui/Button';

export const APEFormPage3 = () => {
  const [numFamilyMembers, setNumFamilyMembers] = useState(1);
  const fields = (
    <>
      {/* Name */}
      <LabelledInput label="Full Name" id="name" isRequired={true}>
        <Input type="text" required={true} placeholder="Given Name" />
        <Input type="text" placeholder="Middle Name" />
        <Input type="text" required={true} placeholder="Last Name" />
      </LabelledInput>

      {/* Relationship */}
      <LabelledInput label="Relationship" id="relationship" isRequired={true}>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="How are you related to them?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="parent">Parent</SelectItem>
            <SelectItem value="sibling">Sibling</SelectItem>
            <SelectItem value="spouse">Spouse</SelectItem>
            <SelectItem value="child">Child</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </LabelledInput>

      {/* Age */}
      <LabelledInput label="Age" id="age" isRequired={true}>
        <Input type="number" required={true} placeholder="Years" />
      </LabelledInput>
    </>
  );
  return (
    <CardContent className="text-left">
      <div className="flex items-center gap-4">
        <Progress className="h-3" value={76} />
        <p className="min-w-20 text-right">Page 3 of 3</p>
      </div>
      <div className="space-y-4 mt-4">
        <h2 className="text-xl font-bold">Family Relations</h2>

        {/* Add/Remove Family Member Button */}
        <div className="space-x-2">
          <Button variant="default" onClick={() => setNumFamilyMembers(prev => prev + 1)}>
            Add Family Member
          </Button>
          <Button
            variant="default"
            onClick={() => setNumFamilyMembers(prev => Math.max(1, prev - 1))}
            disabled={numFamilyMembers === 1}
            style={{ display: numFamilyMembers === 1 ? 'none' : 'inline-block' }}
          >
            Remove Family Member
          </Button>
        </div>

        {/* Add fields */}
        {Array.from({ length: numFamilyMembers }).map((_, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-bold mt-8">Family Member {index + 1}</h3>
            {fields}
          </div>
        ))}
      </div>
    </CardContent>
  );
};
