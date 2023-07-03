import React, { 
    useState, 
    useRef, 
    useLayoutEffect,
    useMemo
} from 'react';
import './background.module.scss';
import styles from './background.module.scss';
import { useIsClient } from 'usehooks-ts';
import anime from 'animejs';

const Background = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const isClient = useIsClient();
  const [toggled, setToggled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const calcTiles = () => {
      useMemo(() => {
        setColumns(window.innerWidth / 50)
      }, 
      [window.innerWidth]);
      useMemo(() => {
        setRows(window.innerHeight / 50)
      }, 
      [window.innerHeight]);
    };

    const handleOnClick = (index: any) => {
      setToggled(!toggled);

      anime({
        targets: '.tile',
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
          grid: [columns, rows],
          from: index,
        }),
      });
    };

    const createTile = (index: any) => {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.onclick = (e) => handleOnClick(index);
      return tile;
    };

    const createTiles = (quantity: number) => {
      const tiles = Array.from({ length: quantity }, (_, index) => createTile(index));
      wrapper.append(...tiles);
    };

    const createGrid = () => {
      wrapper.innerHTML = '';

      calcTiles();

      wrapper.style.setProperty('--columns', columns.toString());
      wrapper.style.setProperty('--rows', rows.toString());

      createTiles(columns * rows);
    };

    if (isClient) createGrid();
  }, 
  [isClient,
   toggled, 
   columns, 
   rows
  ]);

  return (
    <div className={`h-screen overflow-hidden m-0 ${styles.container}`}>
      <div id="tiles" ref={wrapperRef}></div>
    </div>
  );
};

export default Background;
