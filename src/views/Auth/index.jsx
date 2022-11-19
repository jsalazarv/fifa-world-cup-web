import { useForm, FormProvider } from 'react-hook-form';
import { RegistrationForm } from './components/RegistrationForm';
import './styles.css';

export const Auth = () => {
  const methods = useForm();

  return (
    <div className="auth">
      <FormProvider {...methods}>
        <RegistrationForm />
      </FormProvider>
    </div>
  );
};
