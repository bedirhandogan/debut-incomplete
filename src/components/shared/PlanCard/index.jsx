import prettyMs from 'pretty-ms';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Members from 'components/shared/Members';
import Options from 'components/shared/PlanCard/Options';
import Popup from 'components/shared/PlanCard/Popup';
import Tags from 'components/shared/Tags';
import Tooltip from 'components/shared/Tooltip';

import './styles.scss';

function PlanCard({ data, type }) {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const [planCardRef, popupTriggerRef, popupRef] = [useRef(), useRef(), useRef()];

  const date = prettyMs(new Date().getTime() - data.date.updatedAt, {
    compact: true,
    verbose: true,
  });

  const handleClick = useCallback(
    (event) => {
      if (
        event.composedPath().includes(planCardRef.current) &&
        !event.composedPath().includes(popupTriggerRef.current) &&
        !event.composedPath().includes(popupRef.current)
      ) {
        type !== 'bin' && navigate(`/app/plans/${data.id}`);
      } else if (event.composedPath().includes(popupTriggerRef.current)) {
        setShowPopup((prevState) => !prevState);
        return; // don't close popup
      }

      setShowPopup(false);
    },
    [planCardRef, popupTriggerRef, popupRef, navigate, data, type],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <div className={'planCard'} ref={planCardRef}>
      <div className={'planCard-header'}>
        <Tags data={data} />
        {type !== 'bin' ? (
          <Popup data={data} state={showPopup} reference={{ popupRef, popupTriggerRef }} />
        ) : (
          <Options data={data} />
        )}
      </div>
      <div className={'planCard-body'}>
        <div className={'planCard-body-title'}>{data.title}</div>
        <div className={'planCard-body-preview'}></div>
      </div>
      <div className={'planCard-footer'}>
        <Tooltip
          style={{
            left: 0,
          }}
          position={'bottom'}
          text={'Members'}
        >
          {<Members data={data} />}
        </Tooltip>
        <div className={'planCard-date'}>{date} ago</div>
      </div>
    </div>
  );
}

export default PlanCard;
