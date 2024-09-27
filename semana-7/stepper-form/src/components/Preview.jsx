export const Preview = ({ previewInfo }) => {
  const previewComponent = !!previewInfo.component && <previewInfo.component />;

  return (
    <section>
      <h1>{previewInfo.title}</h1>
      <span>{previewInfo.description}</span>
      {previewComponent}
    </section>
  );
};
