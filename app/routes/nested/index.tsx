import { createRoute } from "honox/factory";
import { Button } from "@/components/ui/button";

export default createRoute((c) => {
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div>
      <h1>here is nested page!!</h1>
      <Button>Click</Button>
    </div>,
    { title: name },
  );
});
