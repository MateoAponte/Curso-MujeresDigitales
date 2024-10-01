export const Preview = ({ previewInfo }) => {
  const previewComponent = !!previewInfo.component && <previewInfo.component />;

  return (
    <section className="preview">
      <h1 className="preview__title">{previewInfo.title}</h1>
      <p className="preview__description">{previewInfo.description}</p>
      <div className="preview__content">{previewComponent}</div>
    </section>
  );
};
