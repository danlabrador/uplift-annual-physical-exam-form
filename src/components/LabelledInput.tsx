import { Label } from '@radix-ui/react-label';

interface LabelledInputProps extends React.PropsWithChildren {
  label: string;
  id: string;
  isVertical?: boolean;
  isRequired?: boolean;
}
export const LabelledInput = ({ label, id, isVertical, children }: LabelledInputProps) => {
  const orientationProps = isVertical ? ' flex-col' : ' flex';
  return (
    <div>
      <Label className={'text-sm'} htmlFor={id}>
        {label}
      </Label>
      <div className={'flex gap-2' + orientationProps}>{children}</div>
    </div>
  );
};
