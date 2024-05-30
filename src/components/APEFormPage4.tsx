import { CardContent } from './ui/Card';
import { Progress } from './ui/Progress';

export const APEFormPage4 = () => {
  return (
    <CardContent className="text-left">
      <div className="flex items-center gap-4">
        <Progress className="h-3" value={100} />
        <p className="min-w-20 text-right">Completed</p>
      </div>

      <div className="space-y-4 mt-4">
        <h2 className="text-xl font-bold">Thank you for completing the form!</h2>
        <p>
          Your form has been successfully submitted. You will receive an email confirmation shortly.
        </p>
      </div>
    </CardContent>
  );
};
