import { createRoute } from "honox/factory";
import { Button } from "@/components/ui/button";
import Counter from "@/islands/counter";
import Calendar from "@/islands/Calendar";
export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <Counter />
      <Button>Click</Button>
      <Calendar />
    </div>,
    { title: name },
  );
});
