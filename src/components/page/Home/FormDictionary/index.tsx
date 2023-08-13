import { TextInput, Button, Text } from '@mantine/core';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useDictionary } from '@/hooks/useDictionary';

import { formContainer, resultContainer } from './styles.css';
import { FormSearch, schema } from './schema';

const FormDictionary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormSearch>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { meaning, handleSearch, status } = useDictionary();

  const onSubmit: SubmitHandler<FormSearch> = ({ searchWord }) => {
    handleSearch(searchWord);
    reset();
  };

  return (
    <form className={formContainer} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placeholder="Search"
        error={errors.searchWord?.message}
        variant="filled"
        {...register('searchWord')}
      />
      <Button
        loading={status.isLoading}
        variant="gradient"
        disabled={!isValid}
        type="submit"
      >
        Search
      </Button>

      <span className={resultContainer}>
        {meaning ?? <Text>{meaning}</Text>}
        {status.error ?? <Text>{status.error}</Text>}
      </span>
    </form>
  );
};

export default FormDictionary;
