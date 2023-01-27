import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/selectors';

export const TaskCounter = () => {
  // const tasks = useSelector(selectTasks);

  // На базі стану Redux отримуємо похідні дані
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
