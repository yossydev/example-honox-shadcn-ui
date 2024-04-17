import { reactRenderer } from "@hono/react-renderer";

export default reactRenderer(({ children, Layout }) => {
  return (
    <Layout>
      <body>{children}</body>
    </Layout>
  );
});
