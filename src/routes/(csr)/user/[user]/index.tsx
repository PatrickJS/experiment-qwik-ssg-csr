import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import UserShell from "~/routes/ssg/user/[user]/index";

export default component$(() => {
  const route = useLocation();
  return <UserShell>{route.params.user}</UserShell>;
});
