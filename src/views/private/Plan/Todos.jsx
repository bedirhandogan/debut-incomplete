import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import Button from 'components/shared/Button';
import TodoItem from 'components/shared/TodoItem';

import './styles.scss';

function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'text1',
    },
    {
      id: 2,
      text: 'text2',
    },
    {
      id: 3,
      text: 'text3',
    },
  ]);

  const handleDrop = (droppedItem) => {
    if (!droppedItem.destination) return;

    const updatedList = [...todos];
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);

    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    setTodos(updatedList);
  };

  return (
    <div className={'todos'}>
      <div className={'todos-header'}>
        <div className={'todos-header-title'}>There are 0 todos created</div>
        <Button
          type={'third'}
          style={{
            width: 'max-content',
            padding: '0 20px',
          }}
        >
          Add Todo
        </Button>
      </div>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId={'todos'}>
          {(provided) => (
            <div className={'todos-grid'} {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((v, i) => (
                <Draggable key={v.id} draggableId={v.id.toString()} index={i}>
                  {(provided) => (
                    <TodoItem
                      text={v.text}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    />
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Todos;
