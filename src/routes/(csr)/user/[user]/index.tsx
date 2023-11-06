import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const route = useLocation();
  return <div>{route.params.user}</div>;
});
