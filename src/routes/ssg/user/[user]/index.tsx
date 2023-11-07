import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      Loading... <Slot></Slot>
    </div>
  );
});
