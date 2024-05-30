# Uplift: Annual Physical Exam

## Overview

The "Uplift: Annual Physical Exam" project is a multi-step form application designed to collect comprehensive information about the user's annual physical exam. The form is divided into several pages, each gathering specific details to ensure a thorough evaluation.

## How to Use

### Installation

1. Ensure all dependencies are installed by running:

   ```sh
   npm install
   ```

### Running the Application

1. Start the application with:

   ```sh
   npm run dev
   ```

### Navigating the Form

- The form is divided into multiple pages, navigable using "Next" and "Previous" buttons.
- Fill out each page with the required information.
- On the final page, submit the form to complete the process.

## Limitations

### Form Validation

- Form validation has not been implemented yet. This will be added supposedly if the project is continued.

### Resetting the Form

- To reset the form, refresh the page. This is a temporary solution until a reset button is implemented.

## Code Structure

- `src/App.tsx`: The main entry point, now simplified to include the `APEForm` component.
- `src/components/APEForm.tsx`: Manages the form page navigation and submission.
- `src/components/APEFormPage1.tsx`, `src/components/APEFormPage2.tsx`, `src/components/APEFormPage3.tsx`, `src/components/APEFormPage4.tsx`: Individual form pages for collecting different sets of information.

For any issues or further assistance, please refer to the project's repository or contact the maintainer.
