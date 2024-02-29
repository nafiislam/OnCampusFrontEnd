"use client";

import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react-pro';
import "gantt-task-react-pro/dist/index.css";

let tasks: Task[] = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: 'Idea',
      id: 'Task 0',
      type:'task',
      progress: 45,
      isDisabled: true,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2020, 1, 2),
      end: new Date(2020, 1, 3),
      name: 'Idea',
      id: 'Task 1',
      type:'task',
      progress: 45,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2020, 1, 3),
      end: new Date(2020, 1, 4),
      name: 'Idea',
      id: 'Task 2',
      type:'task',
      progress: 45,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2020, 1, 4),
      end: new Date(2020, 1, 5),
      name: 'Idea',
      id: 'Task 3',
      type:'task',
      progress: 45,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
      start: new Date(2020, 1, 5),
      end: new Date(2020, 1, 6),
      name: 'Idea',
      id: 'Task 4',
      type:'task',
      progress: 45,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
    },
    {
        start: new Date(2020, 1, 6),
        end: new Date(2020, 1, 7),
        name: 'Idea',
        id: 'Task 5',
        type:'task',
        progress: 45,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        },
        {
        start: new Date(2020, 1, 7),
        end: new Date(2020, 1, 8),
        name: 'Idea',
        id: 'Task 6',
        type:'task',
        progress: 45,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        },
        {
        start: new Date(2020, 1, 8),
        end: new Date(2020, 1, 9),
        name: 'Idea',
        id: 'Task 7',
        type:'task',
        progress: 100,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
        },
    
];

export default function GanttPage() {
    return (
        <Gantt tasks={tasks} />
    );
}