import './styles.scss';

function Members({ data }) {
  return (
    <div className={'members'} data-member-length={data.users.length}>
      {data.users.slice(0, 3).map((v, i) => (
        <img src={v.photoUrl} alt={v.displayName} key={i} />
      ))}
      {data.users.length > 3 && <div className={'members-plus'}>+{data.users.length - 3}</div>}
    </div>
  );
}

export default Members;
