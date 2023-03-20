import Button from 'components/shared/Button';

import './styles.scss';

function Notes() {
  return (
    <div className={'notes'}>
      <div className={'notes-header'}>
        <div className={'notes-header-title'}>There are 0 notes created</div>
        <Button
          type={'third'}
          style={{
            width: 'max-content',
            padding: '0 20px',
          }}
        >
          Create Note
        </Button>
      </div>
      <div className={'notes-grid'}>
        <div className={'notes-grid-message'}>No note created yet</div>
      </div>
    </div>
  );
}

export default Notes;
