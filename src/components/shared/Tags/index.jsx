import './styles.scss';

function Tags({ data }) {
  return (
    <div className={'tags'}>
      {data.tags?.length === 0 ? (
        <div className={'tags-tag'}>Unlabeled</div>
      ) : (
        data.tags?.map((v, i) => (
          <div className={'tags-tag'} key={i}>
            {v}
          </div>
        ))
      )}
    </div>
  );
}

export default Tags;
