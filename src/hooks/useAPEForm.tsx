import { useState } from 'react';
import { APEFormPage1 } from '../components/APEFormPage1';
import { APEFormPage2 } from '../components/APEFormPage2';
import { APEFormPage3 } from '../components/APEFormPage3';
import { APEFormPage4 } from '../components/APEFormPage4';

export const useAPEForm = () => {
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

  return { page, currentPage, setCurrentPage };
};
