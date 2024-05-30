import { Card, CardFooter, CardHeader } from './ui/Card';
import { useState } from 'react';
import { Button } from './ui/Button';
import { APEFormPage1 } from './APEFormPage1';
import { APEFormPage2 } from './APEFormPage2';
import { APEFormPage3 } from './APEFormPage3';
import { APEFormPage4 } from './APEFormPage4';

export const APEForm = () => {
  const [currentPage, setCurrentPage] = useState(1);

  let page;
  switch (currentPage) {
    case 1:
      page = <APEFormPage1 />;
      break;
    case 2:
      page = <APEFormPage2 />;
      break;
    case 3:
      page = <APEFormPage3 />;
      break;
    case 4:
      page = <APEFormPage4 />;
      break;
    default:
      page = <APEFormPage1 />;
  }

  return (
    <>
      <Card className="max-w-[1024px] mx-auto px-8 py-6">
        <CardHeader>
          <h1 className="text-3xl font-bold">Annual Physical Exam Form</h1>
        </CardHeader>
        {page}
        <CardFooter className="justify-between">
          <div className="flex w-full justify-between">
            <div style={{ display: currentPage === 1 ? 'block' : 'none' }}></div>
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              style={{ display: currentPage === 1 || currentPage === 4 ? 'none' : 'block' }}
            >
              Previous
            </Button>

            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.min(3, prev + 1))}
              disabled={currentPage === 3}
              style={{ display: currentPage === 3 || currentPage === 4 ? 'none' : 'block' }}
            >
              Next
            </Button>
            <Button
              variant="default"
              onClick={() => {
                setCurrentPage(4);
              }}
              style={{ display: currentPage === 3 ? 'block' : 'none' }}
            >
              Submit
            </Button>
          </div>
        </CardFooter>
      </Card>
      <p className="text-sm mt-2">
        Powered by&nbsp;
        <a className="underline" href="https://daniellabrador.com" target="_blank">
          Dan Labrador
        </a>
      </p>
    </>
  );
};
