import { InfoStep } from '../components/steps/InfoStep';
import { PlanStep } from '../components/steps/PlanStep';
import { Summary } from '../components/steps/Summary';
import { AddonStep } from '../components/steps/AddonStep';

export const STEP_PREVIEW_INFO = [
  {
    title: 'Your Info',
    description: 'Please provide your name, email address, and phone number.',
    component: InfoStep,
  },
  {
    title: 'Select your Plan',
    description: 'You have the option of monthly or yearly billing.',
    component: PlanStep,
  },
  {
    title: 'Pick Add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    component: AddonStep,
  },
  {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    component: Summary,
  },
];
