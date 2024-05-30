import { CardContent } from './ui/Card';
import { Progress } from './ui/Progress';

export const APEFormPage2 = () => {
  return (
    <CardContent className="text-left">
      <div className="flex items-center gap-4">
        <Progress className="h-3" value={43} />
        <p className="min-w-20 text-right">Page 2 of 3</p>
      </div>
      <div className="space-y-4 mt-4">Test</div>
    </CardContent>
  );
};
