import { useDispatch, useSelector } from 'react-redux'
import { edit } from 'store/reducers/create-plan'
import './styles.scss'
import Input from 'components/shared/Input'
import Textarea from 'components/shared/Textarea'
import { IconX } from '@tabler/icons-react'

function Details() {
   const dispatch = useDispatch()
   const { data } = useSelector((state) => state.createPlan)

   const handleTitle = (event) =>
      dispatch(
         edit({
            title: event.target.value,
         })
      )

   const handleDescription = (event) =>
      dispatch(
         edit({
            description: event.target.value,
         })
      )

   const handleTag = (event) => {
      if (event.key === 'Enter' && data.tags.length < 5) {
         dispatch(
            edit({
               tags: [...data.tags, event.target.value],
            })
         )

         // normalize
         event.target.value = ''
      }
   }

   const deleteTag = (index) => {
      const filtered = data.tags.filter((v, i) => i !== index)

      dispatch(
         edit({
            tags: filtered,
         })
      )
   }

   return (
      <div className={'create-plan-details'}>
         <div className={'create-plan-wrapper'}>
            <div className={'create-plan-wrapper-name'}>Title</div>
            <Input
               placeholder={'Enter a title for plan'}
               type={'text'}
               style={{ textAlign: 'left', padding: '10px', width: '100%' }}
               onChange={handleTitle}
            />
         </div>
         <div className={'create-plan-wrapper'}>
            <div className={'create-plan-wrapper-name'}>Description</div>
            <Textarea
               placeholder={'Enter a description for plan'}
               style={{
                  height: '100px',
               }}
               onChange={handleDescription}
            />
         </div>
         <div className={'create-plan-wrapper'}>
            <div className={'create-plan-wrapper-name'}>Tags</div>
            <Input
               placeholder={'Enter a tag for plan'}
               type={'text'}
               style={{ textAlign: 'left', padding: '10px', width: '100%' }}
               onKeyPress={handleTag}
            />
            {data.tags.length === 0 && (
               <div className={'create-plan-wrapper-note'}>
                  You haven't added a tag yet.
               </div>
            )}
         </div>
         <div className={'create-plan-tags'}>
            {data.tags.map((v, i) => (
               <span key={i}>
                  {v}
                  <IconX
                     stroke={2}
                     width={12}
                     height={12}
                     style={{ color: 'var(--icon-color-primary)' }}
                     onClick={() => deleteTag(i)}
                  />
               </span>
            ))}
         </div>
      </div>
   )
}

export default Details
